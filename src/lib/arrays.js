/* eslint-disable prettier/prettier */
const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(str => str.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(str =>
    str
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  return numbers.filter(n => n % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((n, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(n => n.match(/^[aeiou]/i));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  return strings
    .map(str =>
      str
        .split('')
        .reverse()
        .join('')
    )
    .sort()
    .map(str =>
      str
        .split('')
        .reverse()
        .join('')
    );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
