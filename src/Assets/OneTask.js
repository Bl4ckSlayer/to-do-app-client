import React, { useState } from "react";

import { toast } from "react-toastify";

const OneTask = (props) => {
  const { tasks, setTasks } = props;
  const { name, description, _id } = props.task;
  const [modalShow, setModalShow] = useState(false);
  const deleteTask = () => {
    const url = `https://aqueous-eyrie-49349.herokuapp.com/task/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = tasks.filter((item) => item._id !== _id);
          toast.success("Successfully Deleted");
          setTasks(remaining);
        }
      });
  };

  const completeTask = () => {
    const updatedTask = { name, description, completed: "true" };
    console.log(updatedTask);

    fetch(`https://aqueous-eyrie-49349.herokuapp.com/task/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch("https://aqueous-eyrie-49349.herokuapp.com/task")
          .then((res) => res.json())
          .then((data) => setTasks(data));
      });
  };

  return (
    <div className="p-3">
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h3 class="card__title font-bold text-xl">
            {props.task.completed === "true" ? (
              <h1 className="text-red-700 ">
                <del>Name:{name}</del>
              </h1>
            ) : (
              <h1 className=" ">
                Name: <span className="text-blue-400">{name}</span>
              </h1>
            )}
          </h3>
          {props.task.completed === "true" ? (
            <h1 className="text-red-700 font-bold text-xl">
              <del>{description}</del>
            </h1>
          ) : (
            <h1 className="text-white font-bold text-xl">{description}</h1>
          )}

          {props.task.completed === "false" && (
            <button class="btn btn-primary" onClick={() => completeTask()}>
              Complete Task
            </button>
          )}
          <div class="card-actions justify-end">
            <button class="btn btn-secondary" onClick={deleteTask}>
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTask;
