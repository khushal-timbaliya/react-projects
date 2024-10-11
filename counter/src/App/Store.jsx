import { configureStore } from "@reduxjs/toolkit";
import counter from "../Fecture/Counterslice";

export const store = configureStore({
    reducer:{
        counterKey : counter
    }
})