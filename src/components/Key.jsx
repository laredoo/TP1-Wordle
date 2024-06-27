import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  function selectLetter() {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  }

  const style = bigKey ? "big" : disabled ? "disabled" : undefined;

  return (
    <div className={!!style ? `key ${style}` : "key"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
