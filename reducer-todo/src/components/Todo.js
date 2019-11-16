import React, { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";

const Todo = props => {
  const { dispatch } = useContext(TodoContext);

  const handleClick = e => {
    e.preventDefault();

    dispatch({
      type: "TOGGLE_COMPLETION",
      payload: {
        id: props.todo.id
      }
    });
  };

  return (
    <div
      onClick={handleClick}
      style={{ color: props.todo.completed ? "red" : "black" }}
    >
      <p> {props.todo.item} </p>
    </div>
  );
};

export default Todo;
