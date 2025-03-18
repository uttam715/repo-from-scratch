import { useState } from "react";
import Square from "./Square";
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const [count, setCount] = useState(0);
//   const shield = <i className="fa fa-shield"></i>;
//   const car = <i className="fa fa-car"></i>;

  function handleSquareClick(i) {
    const nextSquare = squares.slice();
    if (squares[i] || calculateWinner(squares)) return;
    if (isXNext) {
      nextSquare[i] = "X";
      setCount(count + 1);
    } else {
      nextSquare[i] = "O";
      setCount(count + 1);
    }
    setIsXNext(!isXNext);
    setSquares(nextSquare);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is: "+ winner;
  } else if (count === 9 && !winner) {
    status = "Game Draw";
  } else {
    status = "Next turn of : "+(isXNext ? "X" : "O");
  }

  function handleResetClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(false);
    setCount(0);
  }

  return (
    <div className="game-board">
      <div className="status">
        {status}
      </div>
      <div className="board-row">
        <Square
          value={squares[0]}
          handleSquareClick={() => handleSquareClick(0)}
        />
        <Square
          value={squares[1]}
          handleSquareClick={() => handleSquareClick(1)}
        />
        <Square
          value={squares[2]}
          handleSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          handleSquareClick={() => handleSquareClick(3)}
        />
        <Square
          value={squares[4]}
          handleSquareClick={() => handleSquareClick(4)}
        />
        <Square
          value={squares[5]}
          handleSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          handleSquareClick={() => handleSquareClick(6)}
        />
        <Square
          value={squares[7]}
          handleSquareClick={() => handleSquareClick(7)}
        />
        <Square
          value={squares[8]}
          handleSquareClick={() => handleSquareClick(8)}
        />
      </div>

      <button onClick={handleResetClick}>Reset Game</button>
      {/* <i className="fa-regular fa-face-smile-wink"></i> */}
    </div>
  );
}
