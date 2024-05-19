import { removeSpecialChars } from "./util";

export class WordSet extends Set {
  has(target) {
    for (let word of this.values()) {
      if (target === removeSpecialChars(word)) return true;
    }
    return false;
  }
}
