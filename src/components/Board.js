import React from "react";
import Letter from "./Letter";

const WORD_LENGTH = 5;
const TRIES = 6;

function Board() {
  return (
    <div className="board">
      {Array.from({ length: TRIES }, (_, attemptVal) => (
        <div className="row" key={attemptVal}>
          {Array.from({ length: WORD_LENGTH }, (_, letterPos) => (
            <Letter
              key={letterPos}
              letterPos={letterPos}
              attemptVal={attemptVal}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
