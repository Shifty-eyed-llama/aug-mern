import React from 'react';


// grab a bunch of data in props
const Todo = ({todo, idx, updateTodo, deleteTodo}) => {

    return (
        <div>
            <br />
            <p>Name: {todo.name}</p>
            <p>Completed? {todo.completed.toString()}</p>
            <input
                type="checkbox"
                value={todo.completed}
                checked={todo.completed}
                onChange={e => updateTodo(idx)}
            />
            <br />
            <button onClick={e => deleteTodo(idx)}>DELETE</button>
            <br />
        </div>
    )
}

export default Todo;