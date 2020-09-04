import React, {useState} from 'react';


const Form = ({updateName, setNames, names}) => {


    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [display, setDisplay] = useState("Enter your name!")


    const nameSetter = (e) => {
        setName(e.target.value);
    }

    const formSubmitter = (e) => {
        // prevents the page from refreshing
        e.preventDefault();

        console.log(name);

        if(name === undefined || name.length < 3){
            // error case
            setError("Name must be longer than blah")
        }else{
            // success case
            setNames([...names, name])
            updateName(name);
            setError("");
            setDisplay(name);
            setName("");
        }
    }

    return (
        <div>
            <h3>This is an example of a form!</h3>
            {error}
            <p>name: {name}</p>
            <p>display: {display}</p>
            <form onSubmit={formSubmitter}>
               Name: <input type="text" value={name} onChange={nameSetter} />
               <input type="submit" />
            </form>
        </div>
    )
}


export default Form;