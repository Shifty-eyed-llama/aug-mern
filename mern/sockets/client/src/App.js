import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';


function App() {

  const [socket] = useState(() => io(':8000'));
  const [number, setNumber] = useState(0);


  useEffect(() => {

    socket.on("update-number", data => {
      setNumber(number + data.number);
    })

    return () => socket.disconnect(true);
  }, [])

  const handler = (e) => {
    console.log("test!")
    socket.emit("message-from-client", {"message": "hey this is the client!", "number": number + 1})
    setNumber(number + 1);
  }

  // agar.io


  return (
    <div className="App">
      <h1>{number}</h1>
      <button onMouseMove={handler}>Click me!</button>
    </div>
  );
}

export default App;


// wwww.coolplace.io in/out
