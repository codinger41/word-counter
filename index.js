/*Write a function called *words* that takes in a string argument and counts the occurrences of each word in the string.  The function should return a JSON object showing the words identified, and their occurrences. For example for the input `olly olly in come free`, the output should be **{olly: 2, in: 1, come: 1, free: 1}*/

const words = str => {
  if (str == "") {
    return "must have an input";
  }
  let finalResult = {};
  let wordsInStr = str.split(" ");
  for (let i = 0; i < wordsInStr.length; i++) {
    if (wordsInStr[i] in finalResult) {
      finalResult[wordsInStr[i]] += 1;
    } else {
      finalResult[wordsInStr[i]] = 1;
    }
  }
  return finalResult;
};
module.exports = words