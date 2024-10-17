import { createSlice } from "@reduxjs/toolkit";


export const task = createSlice({
    name: "task",
    initialState: { task: [] },
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload)
        },
        deleteTask : (state, action)=>{
            const data = state.task.filter((item)=> item.id != action.payload)
            state.task = data
        },
        updateTask : (state, action)=>{
            if(e.id == action.payload.id){
                e.task == action.payload.task
                e.taskDes == action.payload.taskDes
                e.taskManager == action.payload.taskManager
                e.priority == action.payload.priority
                e.image == action.payload.image
            }
        },
    }
})

export const { addTask ,deleteTask, updateTask } = task.actions
export default task.reducer