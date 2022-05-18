import React from "react";
import { toast } from "react-toastify";

const AddTask = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    console.log(name, description);
    const newItem = {
      name: name,
      description: description,
      completed: "false",
    };
    const url = `https://aqueous-eyrie-49349.herokuapp.com/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Added Successfullt");
      });
    event.target.reset();
  };
  return (
    <div className=" flex  justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Task</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Add task name here..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Add task description here..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn w-full max-w-xs mt-4 text-white"
          type="submit"
          value="Add Task"
        />
      </form>
    </div>
  );
};

export default AddTask;
