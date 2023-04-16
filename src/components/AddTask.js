import React, { useState } from "react";

import "./AddTask.css";
import { useTasksDispatch } from "../context/TasksContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text
          });
        }}
      >
        Add
      </button>
    </>
  );
};

let nextId = 3;

export default AddTask;
