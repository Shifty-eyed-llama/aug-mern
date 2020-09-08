import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

    const [boxes, setBoxes] = useState([
        {
            "color": "red",
            "height": "100",
            "style": {
                "display": "inline-block",
                "background": "red",
                "height": "100px"
            }
        }
    ]);

    const colorChangeHandler = (color, idx) => {
        let newBoxes = [...boxes]; // create copy

        // newBoxes[idx].color = color
        const selectedBox = Object.assign({}, newBoxes[idx]); // update data in the mutable copy
        const selectedStyle = Object.assign({}, newBoxes[idx].style)
        selectedStyle.background = color;
        selectedBox.color = color;
        selectedBox.style = selectedStyle;
        newBoxes[idx] = selectedBox;
        setBoxes(newBoxes); // over-write the original with the updated copy
    }



  return (
    <div className="App">

    </div>
  );
}

export default App;






























