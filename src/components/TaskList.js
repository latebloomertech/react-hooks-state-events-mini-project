import React from "react";
import Task from "./Task"

function TaskList({ tasks }) {
  return (
    <div className="tasks">
     <Task tasks ={tasks} />
    </div>
  );
}

export default TaskList;
