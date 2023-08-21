'use strict'
// Please don't delete the 'use strict' line above

//P03-1 条件分岐
//問題1
function simplePasswordLock(password) {
  if (password == "password") {
    return "Correct! Welcome.";
  }
  return "Incorrect password, please try again.";
}

console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."


//問題2
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);
//文字の数(スペースも含む)をカウント


//問題3
function isItTooLong(word) {
    if(word.length > 10) {
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log(isItTooLong("Hello"));
console.log(isItTooLong("The length of this string is 31"));


//問題4
function biggerNumber(numOne, numTwo) {
    if(numOne > numTwo) {
        console.log("The first argument is bigger.");
    } else {
        console.log("The second argument is bigger.");
    }
}

console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'


//問題5
function greeting(name, language) {
    if(language == "Japanese") {
        console.log("Konnichiwa, " + name + "!")
    } else {
        console.log("Hello, " + name + "!")
    }
}
console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"