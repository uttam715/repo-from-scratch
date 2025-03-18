import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input } from "../store/counterSlice";

export default function SelectedInputBox({ styles, name }) {
  const [data, setData] = useState("X");
  const tic_tac_value = useSelector(
    (state) => state.tic_tac_input.tic_tac_input_data
  );

  const dispatch = useDispatch();
  function handleOnClick(e) {
    dispatch(input({ name, data }));
    if (data === "X") {
      setData("O");
    } else {
      setData("X");
    }
  }

  const tic_tac_data = tic_tac_value.filter((input) => {
    if (input.name === name) {
      console.log(input.data);
      return true;
    }
  });

  console.log(tic_tac_data, "Tick tac data");

  return (
    <div className={styles} onClick={handleOnClick} name={name}>
      {tic_tac_data[0] ? tic_tac_data[0].data : ""}
    </div>
  );
}
