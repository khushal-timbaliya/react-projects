import { configureStore } from "@reduxjs/toolkit";
import task from "../features/taskslice";


export const store = configureStore({
    reducer : {
        taskKey : task
    }
})