import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const isCorrect = isCorrectLetter(correctWord, letter, letterPos);
  const isAlmostCorrect = isAlmostCorrectLetter(correctWord, letter, isCorrect);
  const letterState = setLetterState(
    currAttempt,
    attemptVal,
    isCorrect,
    isAlmostCorrect
  );

  useEffect(() => {
    if (!isEmpty(letter) && !isCorrect && !isAlmostCorrect) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [
    isAlmostCorrect,
    isCorrect,
    currAttempt.attempt,
    letter,
    setDisabledLetters,
  ]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

function isCorrectLetter(correctWord, letter, letterPos) {
  const correctLetter = correctWord.charAt(letterPos);

  return correctLetter.toUpperCase() === letter;
}

function isAlmostCorrectLetter(correctWord, letter, isCorrect) {
  const isLetterEmpty = isEmpty(letter);
  const correctContainsLetter = correctWord.toUpperCase().includes(letter);

  return !isCorrect && !isLetterEmpty && correctContainsLetter;
}

function isEmpty(letter) {
  return letter === "";
}

function setLetterState(currAttempt, attemptVal, isCorrect, isAlmostCorrect) {
  const hasAttempted = currAttempt.attempt > attemptVal;

  if (!hasAttempted) return false;

  const resultStatus = isCorrect
    ? "correct"
    : isAlmostCorrect
    ? "almost"
    : "error";

  return resultStatus;
}

export default Letter;
