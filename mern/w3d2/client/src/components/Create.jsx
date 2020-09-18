import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';


const Create = ({addSong}) => {
    // state hooks for form variables
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");

    // state hooks for an errors array
    const [errors, setErrors] = useState([]);

    // handler for form submit
    const formHandler = (e) => {
        // prevent the page from refreshing
        e.preventDefault();

        // serialize an object or pass it into axios.post directly
        const song = {name: name, artist: artist};

        axios.post("http://localhost:8000/songs", song)
            .then(res => {
                // do more stuff
                console.log(res);
                addSong(res.data);
                navigate("/");
            })
            .catch(err => {
                // error handling, log your error object so you can get a sense of it's structure
                console.log(err.response.data.errors)

                //pull out keys and make an errors array
                const keys = Object.keys(err.response.data.errors);
                const newErrors = [];

                // push messages
                for(let error of keys){
                    newErrors.push(err.response.data.errors[error].message);
                }

                // pass messages array to state hook
                setErrors(newErrors);
            })
    }


    return (
        <div>
            {/* .map prevents data from showing before errors are loaded */}
            { errors.map((value, idx) =>
                <p>{value}</p>
            )}
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

export default Create;