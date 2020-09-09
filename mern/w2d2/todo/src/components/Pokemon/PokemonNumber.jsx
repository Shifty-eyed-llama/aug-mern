import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokemonNumber = (props) => {

    const [pokemon, setPokemon] = useState({
        name: "",
        sprites: {
            front_default: ""
        }
    });

    const searchPokemon = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                setPokemon(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        searchPokemon(props.number);
    }, [])

    return (
        <div>
            name: {pokemon.name}
            <img src={pokemon.sprites.front_default}></img>
        </div>
    )
}

export default PokemonNumber;