import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Display = ({id, deleteHandler}) => {

    const [song, setSong] = useState({
        artist: "",
        name: "",
        _id: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/songs/${id}`)
            .then(res => {
                console.log(res);
                setSong(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const onClickHandler = (e) => {
        deleteHandler(id);
    }

    return (
        <div>
            <Link to={`/`}>Go back!</Link>
            <p>display {id}</p>
            <p>this song is: {song.name} by {song.artist}</p>
            <button onClick={onClickHandler}>Delete</button>
        </div>
    )
}

export default Display;