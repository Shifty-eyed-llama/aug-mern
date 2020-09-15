import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = (props) => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [response, setResponse] = useState({});

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person

        let newPerson = {firstName: firstName, lastName: lastName};
        console.log(newPerson);

        axios.post('http://localhost:9002/api/people', newPerson)
            .then(res=>{
                console.log(res.data);
                // setResponse(res)
                // props.addPerson(res.data);
                props.getAllPeople();
            })
            .catch(err=>console.log(err))
    }

    const firstNameHandler = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value); // <- stateChange with setter
        console.log(firstName);
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>This is person form!</p>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {firstNameHandler}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default PersonForm;