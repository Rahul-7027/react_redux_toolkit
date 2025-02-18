import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        tasks: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push(action.payload); // Adds a sinsgle task
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter((element) => element.id !== action.payload)
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
