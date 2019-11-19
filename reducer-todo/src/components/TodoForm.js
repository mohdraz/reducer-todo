import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  inputField: {
    border: "1px solid #323858",
    width: "300px",
    height: "50px",
    padding: "10px 15px",
    borderRadius: "40px"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function TodoForm({ values, errors, touched, status }) {
  const [newTodo, setNewTodo] = useState("");
  const { state, dispatch } = useContext(TodoContext);
  const classes = useStyles();

  useEffect(() => {
    if (status) {
      dispatch({
        type: "ADD_TODO",
        payload: values.todo
      });
    }
  }, [status]);

  return (
    <>
      <Form className={classes.form}>
        <div>
          <Field
            type="text"
            name="todo"
            placeholder="Add Your Task"
            className={classes.inputField}
          />
          {touched.todo && errors.todo && (
            <p style={{ color: "red" }}>{errors.todo}</p>
          )}
        </div>

        <Button type="submit">Add Todo</Button>
      </Form>
    </>
  );
}

const FormikTodoForm = withFormik({
  mapPropsToValues({ todo }) {
    return {
      todo: todo || ""
    };
  },

  //==========Validation Schema=============
  validationSchema: Yup.object().shape({
    todo: Yup.string().required("Please Enter a Todo Item")
  }),

  //==========End of Validation Schema=======

  handleSubmit(values, { resetForm, setStatus }) {
    console.log("Value from formik props: ", values);
    setStatus(values);
    resetForm();
  }
})(TodoForm);

export default FormikTodoForm;

/*

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={handleChange}
        />

        <button>Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;

*/
