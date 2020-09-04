import React, {useState} from 'react';
import Name from './Name';


const Names = ({names}) => {


    return (
        <div>
           This is all of the names:
           { names.map((val, i) =>

               <div key={i}>
                   <Name name={val} />
               </div>

            )}
        </div>
    )
}

export default Names;