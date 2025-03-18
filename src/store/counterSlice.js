import { createSlice } from "@reduxjs/toolkit";


export const tic_tac_Slice = createSlice({
    name : "tic_tac_toe",
    initialState:{
        tic_tac_input_data : [],
        // [{name: "aa", data:"X"}]
    },
    reducers : {
        input : (state, action) => {
           return { tic_tac_input_data : [...state.tic_tac_input_data, action.payload]};
        },
    }

})

export default tic_tac_Slice.reducer;
export const {input} = tic_tac_Slice.actions;

// export const tic_tac_Slice = createSlice({
//   name: "input",
//   initialState: {
//     tic_tac_data: 0,
//   },
//   reducers: {
//     increament: (state) => {
//       return {
//     tic_tac_data : state.tic_tac_data + 1
//       }
//     },
//     decreament: (state) => {
//       state.tic_tac_data -= 1;
//     },
//     increamentByAmount: (state, action) => {
//       state.tic_tac_data += action.payload.name;
      
//     },
//   },
// });

// export const {increament, decreament, increamentByAmount} = tic_tac_Slice.actions;
// export default tic_tac_Slice.reducer;
