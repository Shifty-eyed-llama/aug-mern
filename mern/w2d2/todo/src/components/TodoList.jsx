import React, {useState} from 'react';
import TodoDisplay from './TodoDisplay';
import TodoForm from './TodoForm';

const TodoList = () => {

    // todos live here at the highest component
    const [todos, setTodos] = useState([
        {name: "start off with dummy data", completed: true},
        {name: "render dummy data on the screen", completed: false},
        {name: "add a third todo", completed: false},
    ])


    // functions parallel to todos with access to todos and setTodos
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }


    const updateTodo = (idx) => {
        let copies = [...todos];
        copies[idx].completed = !copies[idx].completed;
        setTodos(copies);
    }


    const deleteTodo = (idx) => {
        setTodos(todos.filter((todo) => todo !== todos[idx]));
    }


    // JSX
    return (
        <div>
            <TodoForm addTodo={addTodo}/>
            <TodoDisplay
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />

            { bool === highlight ? <Component></Component> : <div></div> }
        </div>
    )
}

export default TodoList;