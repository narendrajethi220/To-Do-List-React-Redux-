import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rmvTodo } from "../actions/index";
import { MdDelete } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const ViewTodos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const ans = prompt("Are you sure want to Delete? Y/N");
    if (ans === "y" || ans === "Y") {
      dispatch(rmvTodo(index));
      console.log(index);
    }
  };

  return (
    <>
      <div className=" w-1/3 ml-[65%] overflow-y-auto m-4 mt-0 bg-orange-50">
        <h1 className="text-lg  text-slate-700 font-bold text-center border-b-2 pb-2 flex items-center justify-around">
          To-Do List Here
          <span>
            <FaTasks />
          </span>
        </h1>
        <div className="mt-4 text-center ">
          {todos.map((todo, index) => (
            <div key={index} className="m-4 border-b-2 border-zinc-500">
              <h3>
                <span className="font-bold">Title:</span> {todo.title}
              </h3>
              <p>
                <span className="font-bold"> Description:</span>{" "}
                {todo.description}
              </p>
              <button
                className="text-rose-600 text-xl"
                onClick={() => handleDelete(index)}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewTodos;
