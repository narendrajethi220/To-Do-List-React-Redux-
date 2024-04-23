import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodos } from "../actions/index";
import { FaPlus } from "react-icons/fa6";

const AddTodos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTodos(title, description));
    setTitle("");
    setDescription("");
    alert("ToDos Added");
  };
  return (
    <div className=" border-b-2 p-4 mt-4">
      <h1 className="text-center text-xl underline">ToDo List</h1>
      <div className="text-center flex flex-col w-1/2 m-auto mt-4">
        <label>Title</label>
        <input
          className="focus:outline-none"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          className="focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button
        className="rounded-md p-[4px] bg-zinc-500 ml-[40%] mt-4 hover:bg-zinc-600 hover:text-white active:bg-zinc-500 active:text-black flex items-center "
        onClick={() => handleClick()}
      >
        <span className="mr-2">
          <FaPlus />
        </span>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodos;
