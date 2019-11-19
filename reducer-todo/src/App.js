import React, { useReducer, useState } from "react";
import TodoList from "./components/TodoList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
    margin: "0px auto",
    background: "#83abc0",
    padding: "20px 25px"
    // height: "100vh"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Welcome to Your todo List</h1>

      <TodoList />
    </div>
  );
}

export default App;
