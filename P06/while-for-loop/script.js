'use strict'
// Please don't delete the 'use strict' line above

const object = {
    a: "hello",
    b: "bye",
    c: 1000,
};

  console.log(object["a"]); // ???
  console.log(object.b); // ???
  object["b"] = "goodbye";
  console.log(object["b"]); // ???

  // これは少しトリッキーです 😉
  //console.log(object[a]); // ???

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


//問題1
function sayHellos(num) {
    for(let count = 1; count <= num; count++) {
        console.log("Hello!")
    }
}

console.log("問題1の解答")
sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"


//問題2
function countToTen() {
    for(let count = 1; count <= 10; count++) {
        console.log(count);
    }
}

console.log("問題2の解答")
countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


//問題3
/*function counter(num) {
    let i = 0;
    while (i < num) {
      console.log(i);
      i++;
    }
}*/

function counter(num) {
    for(let i = 0; i < num; i++) {
        console.log(i);
    }
}

console.log("問題3の解答")
counter(5);


//問題4
/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
// ここにコードを書きましょう
/*function createRange(start, end) {
    const arr = [];
    for(let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}*/

function createRange(start, end) {
    const arr = [];
    let i = start;
    while(i <= end) {
        arr.push(i);
        i++;
    }
    return arr;
}

console.log("問題4の解答")
test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);


//問題5
/*function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    let i = 0;
  
    while (i < cars.length) {
      console.log(cars[i]);
      i++;
    }
}*/

function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    
    for(let i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
}

console.log("問題5の解答");
printCars();


//問題6
const commands = ["Print me last", "Print me second", "Print me first"];

/*function decrement(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }
}*/

function decrement(list) {
    let i = list.length - 1;
    while(i >= 0) {
        console.log(list[i]);
        i--
    }
}

console.log("問題6の解答");
decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"


//問題7-1
/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
// ここにコードを書きましょう
function addTogether(list1, list2) {
    const resultArr = [];
    if(list1.length > list2.length) {
        for(let i = 0; i < list1.length; i++) {
            if(list2[i] == null) {
                resultArr.push(list1[i]);
            } else {
                resultArr.push(list1[i] + list2[i]);
            }
        } 
    } else if(list1.length < list2.length) {
        for(let i = 0; i < list2.length; i++) {
            if(list1[i] == null) {
                resultArr.push(list2[i]);
            } else {
                resultArr.push(list1[i] + list2[i]);
            }
        } 
    } else {
        for(let i = 0; i < list2.length; i++) {
            resultArr.push(list1[i] + list2[i]);
        }
    }
    return resultArr;
}

console.log("問題7-1の解答");
test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);


//問題7-2
console.log("問題7-2の解答");
test(addTogether([1], [4, 5, 6]), [5, 5, 6]);


//問題8
/**
 * @param {Array<any>} 数字の配列
 * @returns {number} 引数の配列の要素の合計値
 */
// ここにコードを書きましょう
function sum_arr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("問題8の解答");
test(sum_arr([1]), 1);
test(sum_arr([1, 1, 1, 1, 1]), 5);
test(sum_arr([1, 2, 3, 4, 5]), 15);


//問題9
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
}
  
console.log(sum(1, 2, 3));
  
console.log(sum(1, 2, 3, 4));