import React, {useState} from 'react';
import Form from './Form';
import Name from './Name';
import Names from './Names';


const Wrapper = (props) => {

    const [name, setName] = useState("");

    const [names, setNames] = useState(["brendan", "lia", "steve", "beth"]);

    const updateName = (name) => {
        setName(name);
    }

    return (
        <div>
            <h1>This is where your name must be displayed: {name}</h1>
            <Form
                updateName={updateName}
                setNames={setNames}
                names={names}
            />
            <Names
                names={names}
            />
        </div>
    )
}

export default Wrapper;