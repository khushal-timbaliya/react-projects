import { configureStore } from "@reduxjs/toolkit";
import todo from "../Feature/Todo";

export const store = configureStore({
    reducer: {
        todokey : todo,
    }
});