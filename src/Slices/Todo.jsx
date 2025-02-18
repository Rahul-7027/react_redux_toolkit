import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        tasks: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push(action.payload); // Adds a single task
        },
        setTodos: (state, action) => {
            state.tasks = action.payload; // Replaces all tasks
        },
        deleteTodo: (state, action) => {
            state.tasks.filter((element) => element.id !== action.payload)
        }
    }
});

export const { addTodo, setTodos, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
