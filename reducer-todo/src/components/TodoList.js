import React, { useReducer } from "react";
import { TodoContainer } from "../theme/StyledComponents";

import { reducer, initialState } from "../reducers/todoReducer";
import { TodoContext } from "../contexts/TodoContext";
import useTodoStyles from "../theme/todoItemStyles";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useTodoStyles();

  const clearTodos = e => {
    e.preventDefault();

    dispatch({
      type: "CLEAR_TODOS"
    });
  };

  return (
    <TodoContainer>
      <TodoContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        <section>
          <TodoForm />
        </section>
        <section className={classes.todoItemContainer}>
          {state.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </section>{" "}
        <section>
          <button onClick={clearTodos}>Clear Tasks </button>{" "}
        </section>{" "}
      </TodoContext.Provider>{" "}
    </TodoContainer>
  );
};

export default TodoList;
