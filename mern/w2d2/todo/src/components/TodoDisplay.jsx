import React from 'react';
import Todo from './Todo';

const TodoDisplay = ({todos, updateTodo, deleteTodo}) => {

    return (
        <div>
            <p>All Todos</p>
            <br />
            {/* map the todos and create a component for each */}
            { todos.map((val, idx) =>
                <section key={idx}>
                    <Todo
                        todo={val}
                        idx={idx}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                </section>
            )}
        </div>
    )
}

export default TodoDisplay;