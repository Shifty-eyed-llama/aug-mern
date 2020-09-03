import React, {useState} from 'react';

// spread / rest operator
// callbacks
// functional programming (.map, .filter)
// destructuring
// jsx

const Display = ({name, email, username}) => {

    // state variables
    const [variable, setVariable] = useState("");
    const [total, setTotal] = useState(0);
    const [numbers, setNumbers] = useState([1,2,3,4]);

    const [stateName, setStateName] = useState(name);

    // events and fuctions
    const changeNameEvent = () => setStateName("this is your new name!");

    // return JSX
    return (
        <div>
            <p>Hello world!</p>
            <p> Welcome {stateName}</p>
            <p> email {email}</p>
            <p> username {username}</p>
            <button onClick={changeNameEvent}>Click to change your name!</button>
        </div>
    )
}

export default Display;