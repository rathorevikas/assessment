import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userListSlice"

const store = configureStore({
    reducer:{
        usersList: usersReducer
    }
})

export default store