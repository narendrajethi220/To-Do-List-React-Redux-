import AddTodos from "./components/AddTodos";
import ViewTodos from "./components/ViewTodos";
import { ImPencil2 } from "react-icons/im";
import "./index.css";
const App = () => {
  return (
    <>
      <h1 className="bg-teal-50 border-2 border-teal-500 fixed text-xl mt-4 ml-6 font-bold flex items-center justify-items-center justify-around w-[12%] m-[auto] p-4 border-slate-500 ">
        To-Do LIST
        <span>
          <ImPencil2 />
        </span>
      </h1>
      <AddTodos />
      <img
        className="w-[15rem] ml-[42%] fixed "
        src="/images/Project.svg"
        alt="Project-Icon"
      ></img>
      <img
        className="w-[15rem] ml-[42%] mt-[15rem]  fixed "
        src="/images/task.svg"
        alt="Project-Icon"
      ></img>
      <img
        className="w-[15rem] ml-[42%] mt-[32rem] mb-[15rem] fixed "
        src="/images/working.svg"
        alt="Project-Icon"
      ></img>
      <ViewTodos />
    </>
  );
};

export default App;
