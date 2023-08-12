'use strict'
// Please don't delete the 'use strict' line above

//問題1
console.log(2 * 3 * 10 > 50);

//問題2
function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
}
  
console.log(isEqual("10", 10));

//問題3
function isGreaterThan(valueOne, valueTwo) {
    if(valueOne > valueTwo) {
        return true;
    } else {
        return false;
    }
}

console.log(isGreaterThan(8,2));
console.log(isGreaterThan(5,7));


//問題4
function isOfAge(age) {
    if(age >= 20) {
        return true;
    } else {
        return false;
    }
}

console.log(isOfAge(21));
console.log(isOfAge(19));


//問題5
function isEven(n) {
    if(n % 2 == 0) {
        return true;
    } else{
        return false;
    }
}

console.log(isEven(5));


//問題6
function AphereVolume(redius) {
    return 4 / 3 * Math.PI * (redius ** 3);
}

console.log(AphereVolume(1));

function TriangleArea(bottom, height) {
    return (bottom * height) / 2
}

console.log(TriangleArea(3,4));


//問題7
function validCredentials(username, password) {
    if(username.length > 4 & password.length > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(validCredentials("Amiba", "wa"));


//問題8
function isEven(n) {
    if(n / 2 == Math.floor(n / 2)) {
        return true;
    } else{
        return false;
    }
}

console.log(isEven(4));


//問題9
function isOfAge(age) {
    if(age >= 20) {
        return true + "\n 飲みに行きましょ！";
    } else {
        return false + "\n 二十歳になるまで我慢！";
    }
}

console.log(isOfAge(21));
//console.log(isOfAge(12));