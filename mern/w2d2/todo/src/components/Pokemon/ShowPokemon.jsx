import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ShowPokemon = ({idx, thisPokemon}) => {

    const [picture, setPicture] = useState("")

    const getOnePokemon = (url) => {
        axios.get(url)
            .then(response => {
                console.log(response);
                setPicture(response.data.sprites.front_default)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getOnePokemon(thisPokemon.url);
    }, [])

    const getPokemonOnClick = (e) => {
        getOnePokemon(thisPokemon.url);
    }

    return (
        <div>
            Name: {thisPokemon.name}
            <br />
            <img src={picture}></img>
        </div>
    )
}

export default ShowPokemon;