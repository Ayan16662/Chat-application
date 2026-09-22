// store ko configure 
import { configureStore } from "@reduxjs/toolkit";
import user from "../../../backend/src/models/user.model";
import userSlice from "./userSlice"
export  const store  = configureStore({
    reducer:{
        user:{userSlice  // use dispatch acess data  and use slector ki  get 

        }
    }
})