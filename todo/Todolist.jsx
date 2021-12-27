import React from "react";

const TodoList = ({ todolist, deleteHandler, editHandler }) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index} className="text">
          <h5>{todo}</h5>
         
            <button onClick={() => deleteHandler(index)}>Delete</button>
            <button onClick={() => editHandler(index)}>Edit</button>
         
        </div>
      ))}
    </div>
  );
};

export default TodoList;
