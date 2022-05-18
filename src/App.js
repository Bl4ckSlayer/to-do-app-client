import "./App.css";
import Navbar from "./Assets/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Assets/Home";
import Login from "./Assets/Login";
import RequireAuth from "./Assets/RequireAuth";
import AddTask from "./Assets/AddTask";
import Task from "./Assets/Task";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Assets/SignUp";

function App() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/addtask"
          element={
            <RequireAuth>
              <AddTask></AddTask>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/task"
          element={
            <RequireAuth>
              <Task></Task>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
