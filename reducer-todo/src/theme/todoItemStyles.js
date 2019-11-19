import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/styles";
// import { useMediaQuery } from "@material-ui/core";
// import { useEffect } from "react";

const useTodoStyles = makeStyles(theme => ({
  todoItemContainer: {
    display: "flex",
    flexFlow: "row wrap"
  },
  todoItem: {
    margin: "50px",
    background: "#b16471",
    padding: "10px 15px"
  },
  todoComplted: {
    background: "#e0ebf2",
    color: "black",
    textDecoration: "line-through"
  }
}));

export default useTodoStyles;

// function App() {
//   const isActive = useMediaQuery("(max-width: 100px)");
//   const test = window.matchMedia("(max-width: 100px)");

//   useEffect( () => {

//     const testing = window.matchMedia("(max-width: 100px)");

//   },[]);

//   return (
//     <div>
//       <h1>App</h1>
//       {isActive && <p>Red</p>}
//     </div>
//   );
// }
