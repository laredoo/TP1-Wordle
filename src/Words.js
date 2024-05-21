import { removeAccents, removeBreakLine } from "./util/util";
import wordBank from "./wordle-bank.txt";

export const DEFAULT_BOARD = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function getWordsArray(wordsResponse) {
  let newWordsArray = removeAccents(wordsResponse);
  newWordsArray = removeBreakLine(newWordsArray);

  return newWordsArray.split("\n");
}

export async function generateWordSet() {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArray = getWordsArray(result);
      todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)];
      wordSet = new Set(wordArray);
    });
  return { wordSet, todaysWord };
}
