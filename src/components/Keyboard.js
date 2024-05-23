import React, { useCallback, useEffect, useContext, useMemo } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const { keys1, keys2, keys3 } = useMemo(() => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    return { keys1, keys2, keys3 };
  }, []);

  const { disabledLetters, gameOver, onSelectLetter, onEnter, onDelete } =
    useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      const key = event.key.toUpperCase();
      if (key === "ENTER") {
        onEnter();
      } else if (key === "BACKSPACE") {
        onDelete();
      } else {
        [keys1, keys2, keys3].forEach((keys) => {
          if (keys.includes(key)) {
            onSelectLetter(key);
          }
        });
      }
    },
    [gameOver, keys1, keys2, keys3, onDelete, onEnter, onSelectLetter]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  const renderKeys = (keys) => {
    return keys.map((key) => (
      <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />
    ));
  };

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">{renderKeys(keys1)}</div>
      <div className="line2">{renderKeys(keys2)}</div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {renderKeys(keys3)}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
