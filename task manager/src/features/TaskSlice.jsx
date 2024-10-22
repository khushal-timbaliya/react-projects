import { createSlice } from "@reduxjs/toolkit";


export const task = createSlice({
    name: "task",
    initialState: { task: [] },
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload)
        },
        deleteTask: (state, action) => {
            const data = state.task.filter((item) => item.id != action.payload)
            state.task = data
        },
        updateTask: (state, action) => {
            const { id, task, taskField, taskManager, priority } = action.payload;
            const existingTask = state.task.find((t) => t.id === id);
            if (existingTask) {
                existingTask.task = task;
                existingTask.taskField = taskField;
                existingTask.taskManager = taskManager;
                existingTask.priority = priority;
            }
        }
        ,
    }
})

export const { addTask, deleteTask, updateTask } = task.actions
export default task.reducer