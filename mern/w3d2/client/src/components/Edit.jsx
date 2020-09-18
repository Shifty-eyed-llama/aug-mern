import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Edit = ({id, updateSong}) => {

    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");

     useEffect(() => {
        axios.get(`http://localhost:8000/songs/${id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setArtist(res.data.artist);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const formHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/songs/${id}`, {name: name, artist: artist})
            .then(res => {
                console.log(res);
                updateSong(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    return (
        <div>
           <form onSubmit={formHandler}>
                <p>Name:</p>
                 <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>
                <p>Artist:</p>
                <input
                         type="text"
                         value={artist}
                         onChange={e => setArtist(e.target.value)}
                    ></input>
                <br />
                <input type="submit" value="Click here!"></input>
            </form>
        </div>
    )
}

export default Edit;