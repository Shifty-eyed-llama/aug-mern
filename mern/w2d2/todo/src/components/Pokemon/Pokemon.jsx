import React, {useEffect, useState} from 'react';
import DisplayPokemon from './DisplayPokemon';


const Pokemon = () => {

    const [pokemon, setPokemon] = useState([{
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
    }]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        })
    }, [])


    return (
        <div>
            <DisplayPokemon pokemon={pokemon}/>
        </div>
    )
}

export default Pokemon;