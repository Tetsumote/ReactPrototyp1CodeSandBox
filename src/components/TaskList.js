import React from "react";
import { useTasks } from "../context/TasksContext";
import Task from "./Task";

import "./TaskList.css";

const TaskList = () => {
  const tasks = useTasks();
  console.log(tasks, "tasks");
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
