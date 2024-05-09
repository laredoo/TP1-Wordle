import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { currAttempt, gameOver, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Você adivinhou a palavra do Wordle"
          : "Você falhou em adivinhar a palavra do Wordle"}
      </h3>
      <h1>Palavra correta: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Você adivinhou com {currAttempt.attempt} tentativas</h3>
      )}
    </div>
  );
}

export default GameOver;
