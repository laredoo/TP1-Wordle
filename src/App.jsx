import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import { DEFAULT_BOARD, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

const LOSS = {
  gameOver: true,
  guessedWord: false,
};

const WIN = {
  gameOver: true,
  guessedWord: true,
};

function App() {
  const [board, setBoard] = useState(DEFAULT_BOARD);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  function onEnter() {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    currWord = currWord.toLowerCase();

    if (wordSet.has(currWord)) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Palavra não existe");
    }

    if (currWord === correctWord) {
      setGameOver(WIN);
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver(LOSS);
      return;
    }
  }

  function onDelete() {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  }

  function onSelectLetter(key) {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  }

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          gameOver,
          currAttempt,
          correctWord,
          disabledLetters,
          onEnter,
          onDelete,
          setBoard,
          setCurrAttempt,
          onSelectLetter,
          setDisabledLetters,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
