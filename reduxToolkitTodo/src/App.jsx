import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="bg-[#edeef7] rounded-[18px] border border-[#7868e6] py-[48px] px-[24px] mx-auto w-[400px]">
        <h1 className="text-[#7868e6] text-2xl font-semibold">
          To Do List using Redux Toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
