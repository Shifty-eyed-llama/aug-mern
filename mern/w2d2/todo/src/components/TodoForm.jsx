import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {

    // state variables for input
    const [todo, setTodo] = useState("");

    // create wrapper, prevents refreshing, wraps input in an object and adds 'completed: false'
    const createTodo = (event) => {
        event.preventDefault();
        addTodo({name: todo, completed: false});
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={createTodo}>
                <input
                    type="text"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <input
                    type="submit"
                    value="Add your todo!"
                />
            </form>
        </div>
    )
}

export default TodoForm;