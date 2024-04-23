import React from "react";
import { useSelector } from "react-redux";
const ViewTodos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <div>
      <h1 className="text-lg underline text-center mt-4">
        All ToDos List Here
      </h1>
      <div className="mt-4 border-t-2 text-center">
        {todos.map((todo, index) => (
          <div key={index} className="m-4">
            <h3>
              <span className="font-bold">Title:</span> {todo.title}
            </h3>
            <p>
              <span className="font-bold"> Description:</span>{" "}
              {todo.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTodos;
