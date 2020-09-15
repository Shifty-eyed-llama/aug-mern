import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Create = (props) => {

    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");

    const [errors, setErrors] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();

        const song = {name: name, artist: artist};
        axios.post("http://localhost:8000/songs", song)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const keys = Object.keys(err.response.data.errors);
                const newErrors = [];

                for(let error of keys){
                    newErrors.push(err.response.data.errors[error].message);
                }

                setErrors(newErrors);
            })
    }


    return (
        <div>
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