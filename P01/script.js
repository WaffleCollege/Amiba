'use strict'
// Please don't delete the 'use strict' line above

//P01-2 演習問題
const name = "的場安美";
console.log(name); //あなたの名前を表示

let age = 23;
console.log(age); //あなたの年齢を表示

const isProgrammer = "isProgrammer".endsWith("mer");
console.log(isProgrammer); //"true"を表示

let currentTask = 1;
console.log(currentTask); //"1"を表示

currentTask++;
console.log(currentTask); //"2"を表示

//正方形の面積を計算して保存
const squareSideLength = 2;
const squareArea = squareSideLength*squareSideLength;
console.log(squareArea);

//長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength*rectangleHeightLength;
console.log(rectangleArea);

//三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = (triangleBaseLength*triangleHeightLength)/2;
console.log(triangleArea);


//変数のタイプ
//1
//問題1
const variableNumber = 15;
console.log(typeof variableNumber);

//問題2
const variableBoolean = isProgrammer;
console.log(typeof variableBoolean);

//問題3
console.log(typeof variableUndefined);

//2
const numberA = 3;
const numberB = 5;
const average = (numberA + numberB)/2;
console.log(average);


//中級演習
//1
//円の円周率と面積を計算して保存する
const circleDiameter = 10;

//円の円周
const circleCircumference = circleDiameter*Math.PI;
console.log(circleCircumference);

//円の面積
const halfcircleDiameter = circleDiameter / 2;
const circleArea = halfcircleDiameter * halfcircleDiameter * Math.PI;
console.log(circleArea);

//2
let a = "B";
let b = "A";
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);


//3
//appleとbananaの合計値を求め、"二点で合計("合計値")円になります。"と表示させる。
const apple = 150;
const banana = 135;

//ここにあなたのコードを書いてください
//解答1
//var sum = apple + banana;
//const comment = "二点で合計" + sum + "円になります。"

//解答2
//const comment = "二点で合計" + (150 + 135) + "円になります。"

console.log(comment); //"二点で合計285円になります。"と表示