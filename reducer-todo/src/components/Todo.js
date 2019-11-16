import React from "react";


const Todo = props => {
    const {state, dispatch} = props;
    console.log("State from todo.js ", state);

    const handleClick = e => {
        e.preventDefault();
        
        dispatch({
            type: "TOGGLE_COMPLETION",
            payload: {
                id: props.todo.id
            }
        });
    }

    return (
        <div onClick={handleClick} style={ {color: props.todo.completed ? "red" : "black"} } >
            <p> {props.todo.item} </p>
        </div>
    );
}

export default Todo;