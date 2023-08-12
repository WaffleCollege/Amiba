'use strict'
// Please don't delete the 'use strict' line above

//問題1
function add(numOne, numTwo) {
    return numOne + numTwo;
} 

// テスト
console.log(add(4, 3)); // 7 を表示
console.log(add(100, 42)); // => 142

//問題2
console.log(add(100)); // 何が起こる？
console.log(add(1, 4, 5)); // 何が起こる？

//問題3
function simpleFunctionA() {
    return "Hello simple function A";
}
  
function simpleFunctionB() {
    console.log("Hello simple function B");
}
  
console.log(simpleFunctionA(), "--> From running Simple Function A");
console.log(simpleFunctionB(), "--> From running Simple Function B");

//問題4
function average(num1, num2) {
    return((num1 + num2) / 2)
}

console.log(average(4,6));
console.log(average(100,42));

//問題5
//引数に値は入れない
function square() {
    return 5 * 5;
}

//console.log(square());

//文字列で計算が出来ない
function square(x) {
    return x * x;
}

//console.log(square(5));

//問題6
function Square(monkey) {
    return monkey **2;
}

//問題7
function cube(x) {
    return x**3
}

console.log(cube(3));

//問題8
function waffleMaker(topping) {
    return topping + " Waffle"
}

// テスト
console.log(waffleMaker("Apple")); // => Apple Waffle
console.log(waffleMaker("Honey")); // => Honey Waffle


//問題9
function circleArea(circleRadius) {
    return circleRadius*circleRadius*Math.PI
}

console.log(circleArea(10))


//理解度チェック
//1 少ない場合：NaNが表示される　　多い：第二引数までの値で実行される
//2 returnは関数の終了を意味しており、関数内に用いると指定された実行結果を返す。　returnを使うと、返された値が変数に渡ることで、外部から呼び出すことが出来る。


//問題10
function simpleHelloA() {
    console.log("hello");
}
  
function simpleHelloB() {
    return "hello";
}
  
const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b); //console.logは代入することができないため、undefinedになる。


//問題11
function createGreeting(greetingPhrase, instructorName) {
    return greetingPhrase + ", " + instructorName + "!";
}

const morningGreeting = createGreeting("Good" + " morning", "Mike");
const dayGreeting = createGreeting("Hello", "Beau");
const eveningGreeting = createGreeting("Good" + " evening", "Alex");

console.log(morningGreeting); //"Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Beau!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示