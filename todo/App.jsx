import React, { useState } from "react";
import Todolist from "./Todolist";
import "./style.css";
const App = () => {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const [edits, setEdit] = useState(todos);

  const changeHandler = e => {
    setTask(e.target.value);
  };
  const submitHandler = e => {
    if (task === "") {
      alert("Type something.......");
    } else {
      e.preventDefault();
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask("");
    }
  };
  const deleteHandler = indexValue => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };
  const editHandler = editValue => {
    const editTodos = edits.filter((todo, index) => index !== editValue);
    setEdit(editTodos);
    };
    
    
  return (
    <div>
      <center>
        <div id="form">
          <h1>Todo List</h1>
          <form onSubmit={submitHandler}>
            <input
              size="30"
              type="text"
              name="task"
              value={task}
              onChange={changeHandler}
            />
            <button>Add</button>
          </form>
          <Todolist
            todolist={todos}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        </div>
      </center>
    </div>
  );
};

export default App;
