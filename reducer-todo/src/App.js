import React, {useReducer} from 'react';
import TodoList from "./components/TodoList";



function App() {

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
