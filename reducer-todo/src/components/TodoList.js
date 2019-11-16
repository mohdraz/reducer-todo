import React, {useReducer} from "react";
import TodoForm from "./TodoForm";
import {reducer, initialState} from "../reducers/todoReducer";
import Todo from "./Todo";



const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("State from todolist: ", state);

    return (
        <div>
            <section>
        <TodoForm 
            state={state}
            dispatch={dispatch}
            
        
        />
      </section>

            {/* {state.map( item => item.item)} */}

            {state.map( item => (
                  <Todo key={item.id} todo={item} />
             ) )}

      
        </div>
    );
};

export default TodoList; 