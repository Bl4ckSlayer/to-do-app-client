import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="justify-center items-center text-center my-20">
      <h1 className="font-bold text-2xl">
        click the button to see the task or go to all task
      </h1>

      <button className="btn w-full max-w-xs my-12 text-white">
        <Link to="/task">All task</Link>
      </button>
    </div>
  );
};

export default Home;
