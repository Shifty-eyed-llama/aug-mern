import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Router, navigate } from '@reach/router';
import Display from './Display';
import Create from './Create';
import List from './List';
import Edit from './Edit';

const Main = (props) => {

    // songs will be held at the same level as our Router
    // this will lift our state to every component
    const [songs, setSongs] = useState([]);

    // grab all the songs on page load and pass to state hook
    useEffect(() => {
        axios.get("http://localhost:8000/songs")
            .then((res) => {
                console.log(res);
                setSongs(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const addSong = (song) => setSongs([...songs, song]);

    // delete functionality at the same level as the songs state hooks
    // now we can pass it to multiple places
    const deleteSong = (id) => {
        const newSongs = songs.filter(song => song._id !== id);
        setSongs(newSongs);
    }

    const updateSong = (addedSong) => {
        setSongs(songs.map(song => song._id === addedSong._id ? addedSong : song));
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/songs/${id}`)
            .then(res => {
                console.log(res);
                deleteSong(id);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (
        <div>
            <Router>
                <List path="/" songs={songs} deleteHandler={deleteHandler}/>
                <Display path="/display/:id" deleteHandler={deleteHandler} />
                <Create path="/new" addSong={addSong} />
                <Edit path="/edit/:id" updateSong={updateSong} />
            </Router>
        </div>
    )
}

export default Main;