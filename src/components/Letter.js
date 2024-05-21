import React, { useCallback, useContext, useEffect } from "react";
import {
  isEmpty,
  isCorrectLetter,
  setLetterAppearance,
  isAlmostCorrectLetter,
} from "../util/util";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const isCorrect = isCorrectLetter(correctWord, letter, letterPos);
  const isAlmostCorrect = isAlmostCorrectLetter(correctWord, letter, isCorrect);
  const letterAppearance = setLetterAppearance(
    currAttempt,
    attemptVal,
    isCorrect,
    isAlmostCorrect
  );

  const disableLetterHandler = useCallback(() => {
    if (!isEmpty(letter) && !isCorrect && !isAlmostCorrect) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [isAlmostCorrect, isCorrect, letter, setDisabledLetters]);

  useEffect(() => {
    disableLetterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterAppearance}>
      {letter}
    </div>
  );
}

export default Letter;
