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
    <div className="  p-4  ">
      <div className="mt-[8rem] ml-1 text-center flex flex-col w-1/2 mt-4 ml-1 border-2 w-1/3 h-[15rem] bg-blue-100 rounded-lg p-4 fixed">
        <label className="text-zinc-500 font-bold">Title</label>
        <input
          className="focus:outline-none h-[20%] p-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className="text-zinc-500 font-bold">Description</label>
        <textarea
          className="focus:outline-none h-[50%] p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="rounded-md p-[2px]  border-black w-[30%] flex items-center justify-items-center justify-center 0  mt-4 bg-blue-400 text-white hover:text-white  flex items-center hover:bg-blue-500"
          onClick={() => handleClick()}
        >
          <span className="mr-2">
            <FaPlus />
          </span>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodos;
