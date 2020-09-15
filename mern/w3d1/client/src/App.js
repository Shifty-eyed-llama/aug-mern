import React from 'react';
import Main from './components/Main';
import Detail from './components/Detail';
import { Router } from '@reach/router';

function App() {
  return (
    <Router>
        <Main path="people/"/>
        <Detail path="people/:id" />
    </Router>
  );
}
export default App;
