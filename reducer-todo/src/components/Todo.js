import React, { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";
import useTodoStyles from "../theme/todoItemStyles";

const Todo = props => {
  const { dispatch } = useContext(TodoContext);
  const classes = useTodoStyles();

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
      className={
        props.todo.completed
          ? classes.todoItem + " " + classes.todoComplted
          : classes.todoItem
      }
    >
      <p> {props.todo.item} </p>
    </div>
  );
};

export default Todo;
