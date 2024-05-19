import wordBank from "./wordle-bank.txt";
import { removeSpecialChars } from "./util/util";
import { WordSet } from "./util/WordSet";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      todaysWord = removeSpecialChars(todaysWord);
      wordSet = new WordSet(wordArr);
    });
  return { wordSet, todaysWord };
};
