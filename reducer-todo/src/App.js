import React, {useReducer} from 'react';
import {reducer, initialState} from "./reducers/todoReducer";
import TodoList from "./components/TodoList";



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("State from APP.js: ", state);
  console.log("Lenght: ", state.length);
  console.log("dispatch: ", dispatch);


  return (
    <div>
      <h1>Welcome to Your todo List</h1>
      
      <section>
        <TodoList
          // todos={state}
         />


         {/* {state.item} */}
      </section>
    </div>
  );
}

export default App;
