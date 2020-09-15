import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const List = ({songs, deleteSong}) => {

    const deleteHandler = (id) => {

        axios.delete(`http://localhost:8000/songs/${id}`)
            .then(res => {
                console.log(res);
                deleteSong(id);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Link to={`/new`}>Create a new Songs!</Link>
            {songs.map((song, idx) =>
                <div key={idx}>
                    <p>Song Name: {song.name}</p>
                    <p>Song Artist: {song.artist}</p>
                    <p>delete: <button onClick={(e) => {deleteHandler(song._id)}}>Delete Me</button></p>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default List;