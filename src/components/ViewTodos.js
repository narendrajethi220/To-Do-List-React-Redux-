import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rmvTodo } from "../actions/index";
import { MdDelete } from "react-icons/md";

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
    <div>
      <h1 className="text-lg underline text-center mt-4">
        All ToDos List Here
      </h1>
      <div className="mt-4 border-t-2 text-center">
        {todos.map((todo, index) => (
          <div key={index} className="m-4 border-b-2 border-zinc-500 ">
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
  );
};

export default ViewTodos;
