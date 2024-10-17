import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice({
    name : "todo",
    initialState : {student : []},
    reducers: {
        addData : (state , action)=>{
            state.student.push(action.payload)
        },

        deleteData : (state , action)=>{
            let data = state.student.filter((item)=> item.id != action.payload)
            state.student = data
        },
        updateData : (state , action) =>{
            state.student.map((e,i)=>{
                if (e.id == action.payload.id){
                    e.name = action.payload.name
                    e.subject = action.payload.subject
                }
                else{
                    e
                }
            })
        }
    }
})

export const { addData , deleteData , updateData} = todo.actions
export default todo.reducer