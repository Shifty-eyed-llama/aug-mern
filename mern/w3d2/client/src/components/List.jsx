import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const List = ({songs, deleteHandler}) => {

    return (
        <div>
            <Link to={`/new`}>Create a new Songs!</Link>
            {songs.map((song, idx) =>
                <div key={idx}>
                    <p>Song Name: <Link to={`/display/${song._id}`}>{song.name}</Link></p>
                    <p>Song Artist: {song.artist}</p>
                    <p>delete: <button onClick={(e) => {deleteHandler(song._id)}}>Delete Me</button></p>
                    <p>edit: <button onClick={(e) => {navigate(`/edit/${song._id}`)}}>edit me!</button></p>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default List;