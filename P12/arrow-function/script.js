'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
}

//問1
/**
 * @param {number} ???
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう
function isMultipleOfTen(number) {
    if (number % 10 === 0) {
        return number;
    }
}

console.log("問1の解答");
const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
const arrayOfNumbers2 = [20, 30, 66, 89, 100]

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers2.filter(isMultipleOfTen), [20, 30, 100]);


//問2
/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
// ここにコードを書きましょう
function hasAVowel(str) {
    if(str.indexOf("a") != -1 || str.indexOf("i") != -1 || str.indexOf("u") != -1 || str.indexOf("e") != -1 || str.indexOf("o") != -1) {
        return str; 
    }
}

console.log("問2");
const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);


//問3
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
 */
// ここにコードを書きましょう
// function getPositiveNumbers(arr) {
//     let isPositive = arr.filter((x) => x > 0);
//     return isPositive;
// }

// console.log("問3の解答");
// test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
// test(getPositiveNumbers([-2, -4]), []);


//問4
const getPositiveNumbers = (arr) => arr.filter((x) => x > 0);
console.log("問4の解答");
test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);

//問5
		/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function  getQuestions(arr) {
    return arr.filter((x) => {
        let str = x.substring(0,1);
        if(str === str.toUpperCase() && x.indexOf("?") !== -1) {
            return x;
        }
    }) 
}
console.log("問5の解答");
const arrayOfStrings3 = [
    "Hi, there.",
    "What in the world?",
    "My name is JavaScript",
    "Do you want to know a secret?",
  ];
  
  test(getQuestions(arrayOfStrings3), [
    "What in the world?",
    "Do you want to know a secret?",
  ]);
  test(getQuestions(arrayOfStrings3.slice(2)), [
    "Do you want to know a secret?",
  ]);