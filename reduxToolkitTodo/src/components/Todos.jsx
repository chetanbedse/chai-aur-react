import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, changeRole } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none mt-10">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-[#ebe3ee] px-4 py-3 rounded-lg"
          >
            <div className="text-[#7868e6] text-left w-64">{todo.text}</div>
            <div className="flex gap-4 w-12">
              <img
                src="src/assets/edit.svg"
                alt="Edit"
                title="Update Todo"
                className="h-5 action-btn"
                onClick={() => {
                  dispatch(
                    changeRole({
                      role: "Edit",
                      editTodo: todo.text,
                      id: todo.id,
                    })
                  );
                }}
              />
              <img
                src="src/assets/remove.svg"
                alt="Delete"
                title="Delete Todo"
                className="h-5 action-btn"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
