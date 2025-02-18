import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/Todo"; // Ensure the default export is used

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});

// ✅ Fetch tasks correctly and dispatch the appropriate action
// export const fetchTask = () => {
//     return async (dispatch) => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
//             const newData = await res.json();
//             dispatch(addTodo(newData.map(task => task.title)));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

