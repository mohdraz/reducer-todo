import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");

  const { state, dispatch } = useContext(TodoContext);

  const handleChange = e => setNewTodo(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: "ADD_TODO",
      payload: newTodo
    });

    setNewTodo("");
  };

  return (
    <>
      <h3>Todo Form</h3>
      <form>
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
