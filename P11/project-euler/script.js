'use strict'
// Please don't delete the 'use strict' line above

//問題1
// let num1 = 1;
// let num2 = 2;
// let list = [];
// list.push(num1, num2);
// console.log(list);
// let sum = 0;

// function fibonuch(list) {
//     list.push(list[list.length -1 ] + list[list.length - 2]);
//     return list;
// }

// while(list.length < 4000000) {
//     fibonuch(list);
// }

//     for(let i = 0; i < list.length; i++) {
//         if(list[i] % 2 === 0) {
//             sum += list[i];
//         }
//     }

// console.log(sum);


let num1 = 1;
let num2 = 2;
let sum = 0;

while (num2 < 4000000) {
    if (num2 % 2 === 0) {
        sum += num2;
    }
    let next = num1 + num2;
    num1 = num2;
    num2 = next;
}

console.log(sum);


//問題2
function largestPrimeFactor(number) {
    let factor = 2;
    while (factor <= number) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }
    return factor;
}

const givenNumber = 600851475143;
const result2 = largestPrimeFactor(givenNumber);
console.log(result2);


//問題3
function smallestMultiple(max) {
    let smallestNumber = 1;
    for (let i = 1; i <= max; i++) {
        smallestNumber = lcm(smallestNumber, i);
    }
    return smallestNumber;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const maxNumber = 20;
const result3 = smallestMultiple(maxNumber);
console.log(result3);