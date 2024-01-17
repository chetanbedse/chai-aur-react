import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role);
  const todo = useSelector((state) => state.editTodo);
  const id = useSelector((state) => state.id);

  useEffect(() => {
    if (role === "Edit") {
      setInput(todo);
    }
  }, [role]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setErrormsg("Please Enter a Task...");
      return;
    }

    dispatch(addTodo(input));

    setInput("");
    setErrormsg("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-transparent rounded border border-[#7868e6] focus:border-[#7868e6] focus:ring-2 focus:ring-[#7868e6] text-base outline-none text-[#7868e6] py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {role === "Edit" ? (
        // Edit Button
        <button
          className="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateTodo({ text: input, id: id }));
            setInput("");
          }}
        >
          {role} Todo
        </button>
      ) : (
        // Add Button
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {role} Todo
        </button>
      )}
      <p className="space-x-3 py-2 text-red-500 text-xl">{errormsg}</p>
    </form>
  );
}

export default AddTodo;
