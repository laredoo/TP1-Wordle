export function removeSpecialChars(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
