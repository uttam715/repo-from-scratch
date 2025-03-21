import React, { useState } from "react";
import SelectedInputBox from "../tic_tac_toe-atom/SelectedInputBox";
export default function GameDashboard() {
  const [result, setResult] = useState(false);
  const [gameInputList, setGameInputList] = useState("");

  return (
    <div className="bg-teal-500 h-60 p-6">
      <div className="flex border-b-8 border-teal-700 h-1/3">
        <SelectedInputBox styles="text-[54px] text-sky-200 border-r-8 w-1/3 border-teal-700 flex items-center justify-center" name ="aa"/>
        <SelectedInputBox styles="text-[54px] text-sky-200 border-r-8 w-1/3 flex items-center justify-center border-teal-700" name ="ab"/>
        <SelectedInputBox styles="text-[54px] text-sky-200 flex items-center justify-center w-1/3" name ="ac"/>
      </div>
      <div className="flex border-b-8 border-teal-700 h-1/3">
        <SelectedInputBox styles="text-[54px] text-sky-200 border-r-8 w-1/3 flex items-center justify-center border-teal-700" name = "ba"/>
        <SelectedInputBox styles="text-[54px] text-sky-200 border-r-8 w-1/3 flex items-center justify-center border-teal-700" name ="bb"/>
        <SelectedInputBox styles="text-[54px] text-sky-200 flex items-center justify-center w-1/3" name = "bc"/>
      </div>
      <div className="flex h-1/3">
        <SelectedInputBox styles="text-[54px] text-sky-200 border-r-8 w-1/3 flex items-center justify-center border-teal-700" name ="ca"/>
        <SelectedInputBox styles="text-[54px] text-sky-200 border-r-8 w-1/3 flex items-center justify-center border-teal-700" name ="cb"/>
        <SelectedInputBox styles="text-[54px] text-sky-200 flex items-center justify-center w-1/3" name = "cc"/>
      </div>
    
    </div>
  );
}
