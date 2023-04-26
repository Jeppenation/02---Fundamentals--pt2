'use strict';

const word = 'the quick brown fox';
let splittedString = [];
let reversedWordArray = [];

const reverseWord = function (wordToReverse) {
  splittedString = wordToReverse.split(' ');

  for (let i = 0; i < splittedString.length; i++) {
    let reversedWord = '';
    for (let j = splittedString[i].length - 1; j >= 0; j--) {
      reversedWord += splittedString[i][j];
      console.log(i, j);
    }
    reversedWordArray.push(reversedWord);
  }
  console.log(reversedWordArray);
};

console.log(reverseWord(word));
