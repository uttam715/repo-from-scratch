import { configureStore } from "@reduxjs/toolkit";
import tic_tac_Reducer from "./counterSlice";

export default configureStore({
    reducer : {
        tic_tac_input : tic_tac_Reducer,
    },
})