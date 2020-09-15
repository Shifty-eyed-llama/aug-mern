import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const PersonList = (props) => {
    return (
        <div>
            {props.people.map((person, idx)=>
                <div>
                    <p key={idx}>{person.lastName}, {person.firstName}</p>
                    <Link to={`/people/${person._id}`}>Navigate</Link>
                </div>
            )}
        </div>
    )
}

export default PersonList;