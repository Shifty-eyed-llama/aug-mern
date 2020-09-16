import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Edit = ({id}) => {

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

    return (
        <div>
           <form>
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