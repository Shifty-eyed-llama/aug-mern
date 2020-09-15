import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from './PersonForm';
import PersonList from './PersonList';


const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        getAllPeople();
    },[]);

    // way 2
    const getAllPeople = () => {
         axios.get('http://localhost:9002/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    }

    // way 1
    const addPerson = (person) => {
        setPeople([...people, person]);
    }

    return (
        <div>
            <p> This is main component! </p>
            <PersonForm addPerson={addPerson} getAllPeople={getAllPeople} />
             {loaded && <PersonList people={people}/>}
        </div>
    )
}

export default Main;
