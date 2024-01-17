import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello Duniya" }],
  role: "Add",
  editTodo: "",
  id: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeRole: (state, action) => {
      state.role = action.payload.role;
      state.editTodo = action.payload.editTodo;
      state.id = action.payload.id;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos.find((todo) => todo.id === id).text = text;
      state.role = "Add";
    },
  },
});

export const { addTodo, removeTodo, changeRole, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
