export function capitalizeText(inputText) {
  if (inputText.length === 0) {
    return "";
  }
  let firstLetter = inputText[0].toUpperCase();
  let restOfString = inputText.slice(1).toLowerCase();
  return firstLetter + restOfString;
}

export const textUpperCase = (inputText) => inputText.toUpperCase();
