import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import Display from './Display';
import Create from './Create';
import List from './List';
import Edit from './Edit';

const Main = (props) => {

    const [songs, setSongs] = useState([]);

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


    const deleteSong = (id) => {

        const newSongs = songs.filter(song => song._id !== id);
        setSongs(newSongs);

    }


    // const deleteS = (id) => setSongs(songs.filter(song => song._id !== id));

    return (
        <div>
            <Router>
                <List path="/" songs={songs} deleteSong={deleteSong}/>
                <Display path="/display/:id" />
                <Create path="/new"/>
                <Edit path="/edit/:id"/>
            </Router>
        </div>
    )
}

export default Main;


// main
//  router
//      create
//      details
//      show all
//      edit