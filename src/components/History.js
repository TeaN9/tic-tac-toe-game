import React from "react";

function History({ history, jumpTo }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((step, move) => {
          const description = move
            ? "Go to move # " + move
            : "Go to game start";
          return (
            <li key={step}>
              <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
