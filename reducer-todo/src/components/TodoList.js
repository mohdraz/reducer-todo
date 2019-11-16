import React, { useReducer } from "react";

import { reducer, initialState } from "../reducers/todoReducer";
import { TodoContext } from "../contexts/TodoContext";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearTodos = e => {
    e.preventDefault();

    dispatch({
      type: "CLEAR_TODOS"
    });
  };

  return (
    <div>
      <TodoContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        <section>
          <TodoForm />
        </section>
        <section>
          {" "}
          {state.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </section>{" "}
        <section>
          <button onClick={clearTodos}>Clear Tasks </button>{" "}
        </section>{" "}
      </TodoContext.Provider>{" "}
    </div>
  );
};

export default TodoList;
