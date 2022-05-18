import React, { useEffect, useState } from "react";
import OneTask from "./OneTask";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-eyrie-49349.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <OneTask
          key={task._id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        ></OneTask>
      ))}
    </div>
  );
};

export default Task;
