import React, {useState, useReducer} from "react";

const TodoForm = props => {
    const [newTodo, setNewTodo] = useState('');
    const {state, dispatch} = props;
    

    const handleChange = e => setNewTodo(e.target.value);


    console.log("State from From: ", state);

    const handleSubmit = e => {
        e.preventDefault();

        // dispatch({
        //     type: "ADD_TODO",
        //     payload: newTodo
        // });

        dispatch({
            type: "ADD_TODO",
            payload: newTodo
          })

        setNewTodo('');
    };

    return (
        <>
            <h3>Todo Form</h3>
            <form  >
                <input 
                type="text" 
                name="todo"
                value={newTodo}
                onChange={handleChange}
                />

                <button onClick={handleSubmit} >Add Todo</button>
            </form>
        </>
    );
};

export default TodoForm;