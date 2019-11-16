import React, {useReducer} from "react";
import TodoForm from "./TodoForm";
import {reducer, initialState} from "../reducers/todoReducer";
import Todo from "./Todo";



const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("State from todolist: ", state);

    const clearTodos = (e) => {
        e.preventDefault();
        
        dispatch({
            type: "CLEAR_TODOS"
        });
    }

    return (
        <div>
            <section>
        <TodoForm 
            state={state}
            dispatch={dispatch}
        />





      </section>


            {state.map( todo => (
                  <Todo 
                    key={todo.id} 
                    todo={todo} 
                    state={state}
                    dispatch={dispatch}
                  />
             ) )}

        <button onClick={clearTodos} >
            Clear Tasks
        </button>
      
        </div>
    );
};

export default TodoList; 