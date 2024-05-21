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

function setLetterAppearance(
  currAttempt,
  attemptVal,
  isCorrect,
  isAlmostCorrect
) {
  const hasAttempted = currAttempt.attempt > attemptVal;

  if (!hasAttempted) return undefined;

  const resultStatus = isCorrect
    ? "correct"
    : isAlmostCorrect
    ? "almost"
    : "error";

  return resultStatus;
}

function removeAccents(word) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function removeBreakLine(word) {
  return word.replace(/[\r]/g, "");
}
export {
  isEmpty,
  removeAccents,
  removeBreakLine,
  isCorrectLetter,
  setLetterAppearance,
  isAlmostCorrectLetter,
};
