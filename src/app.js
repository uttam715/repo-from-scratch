import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   increament,
//   decreament,
//   increamentByAmount,
// } from "./store/counterSlice.js";
import GameDashboard from "./tic_tac_toe-component/GameDashboard.js";
import GameResult from "./tic_tac_toe-component/GameResult.js";
import SelectInputButton from "./tic_tac_toe-atom/SelectInputButton.js";

export default function App() {
const [section,setSection]=useState(false);

  // const [adddedValue, setAdddedValue] = useState("");
  // const result = useSelector((state) => {
  //   return state.tic_tac_input.tic_tac_data;
  // });
  // const dispatch = useDispatch();
  // function handleOnchange(e) {
  //   const data = e.target.value;
  //   setAdddedValue(data);
  // }

  return (
    <div className="flex items-center justify-center">
      <div className="border m-4 p-4 rounded-md w-1/2 bg-gray-400">
        <SelectInputButton />
        <SelectInputButton />
        <div className="underline">Start game or select player</div>
        {!section ? <GameDashboard /> : <GameResult />}
        <div onClick={() => setSection(false)}>Restart game</div>
      </div>




      {/* <div>{result}</div>
      <button onClick={() => dispatch(increament())}>increase</button>
      <button
        onClick={() => {
          if (result > 0) dispatch(decreament());
        }}
      >
        decrease
      </button>
      <input type="text" value={adddedValue} onChange={handleOnchange}></input>
      <button
        onClick={() => {
          if(adddedValue)
          dispatch(increamentByAmount({name:parseInt(adddedValue)}));
          setAdddedValue("");
        }}
      >
        increasingByValue
      </button> */}
    </div>
  );
}
