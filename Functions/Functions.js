'use strict';

// TASK #1
const numJewelsInStones = function (jewels, stones) {
  const jewelsArray = [...jewels];
  const stonesArray = [...stones];
  let jewelsArrayCorrected = [];
  let jewelsInStone = 0;

  // Removing duplicate elements from jewelsArray
  for (let i = 0; i < jewelsArray.length; i++) {
    if (jewelsArrayCorrected.indexOf(jewelsArray[i]) === -1) {
      jewelsArrayCorrected.push(jewelsArray[i]);
    }
  }

  // Calculating jewels number in my stonesArray
  for (let a = 0; a < stonesArray.length; a++) {
    for (let b = 0; b < jewelsArrayCorrected.length; b++) {
      if (stonesArray[a] === jewelsArrayCorrected[b]) {
        jewelsInStone++;
      }
    }
  }
  return jewelsInStone;
};

console.log(numJewelsInStones('ABCAabcCC', 'aaaAbC'));

// TASK #2 - I Option

const isValid = function (s) {
  const validBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let openBrackets = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      openBrackets.push(s[i]);
    } else {
      if (openBrackets[openBrackets.length - 1] === validBrackets[s[i]]) {
        openBrackets.pop();
      } else return false;
    }
  }
  return openBrackets.length === 0;
};

console.log(isValid('[]'));
