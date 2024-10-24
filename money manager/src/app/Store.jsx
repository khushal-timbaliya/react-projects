import { configureStore } from "@reduxjs/toolkit";
import  income  from "../feture/IncomeSlice";
import  expense  from "../feture/ExpenseSlice";


export const store = configureStore({
    reducer:{
        incomeKey: income,
        expenseKey: expense
    }
})