export default function Square({ value, handleSquareClick }) {
  return (
    <div>
      <button className="square" onClick={handleSquareClick}>
        {value}
      </button>
    </div>
  );
}
