import React from 'react';
import TodoList from './components/TodoList';
import Pokemon from './components/Pokemon/Pokemon';
import PokemonNumber  from './components/Pokemon/PokemonNumber';
import { Router, Link, navigate } from '@reach/router';


function App() {

  const navigateHandler = (e) => {
    navigate("/pokemon")
  }

  return (
    <div>
      <div>
        <p><Link to={"/"}>Todo</Link></p>
        <p><Link to={"/pokemon"}>Pokemon</Link></p>
      </div>
      <button onClick={navigateHandler}>Go to pokemon</button>
      <Router>
        <TodoList  path="/"/>
        <Pokemon path="/pokemon"/>
        <PokemonNumber path="/pokemon/:number" />
      </Router>
    </div>
  );
}

export default App;
