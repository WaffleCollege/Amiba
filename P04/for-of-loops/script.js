'use strict'
// Please don't delete the 'use strict' line above


let expected;
let actual;

//問題1
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
 */

function sumArray(array) {
  let sum = 0;
  for(let num of array) {
    sum = sum + num;
  } return sum;
}

console.log("問題1の解答")
  actual = sumArray([1, 2, 3, 4]);
  expected = 10;
 
function test(actual, expected) {
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}
  // さらにテストを書きましょう。
test(actual, expected);


//問題2
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */

function productArray(array) {
  let mult = 1;
  for(let num2 of array) {
    mult = mult*num2;
  }
  return mult;
}

console.log("問題2の解答")
actual = productArray([1, 2, 3, 4]);
expected = 24;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

test(actual, expected);


//問題3
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */

function hasFun(list) {
  return list.indexOf("fun") !== -1;
}

console.log("問題3の解答")
actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


//問題4
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */

function containsOnlyBooleans(bool1) {
  let bool2 = [];
  for(let bool3 of bool1) {
    bool2.push(typeof(bool3) == "boolean");
  } 
  return bool2.indexOf(false) === -1;
}

console.log("問題4の解答")
actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。


//問題5
/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */

function concatenate(arr1, arr2) {
  let arrAll = arr1.concat(arr2);
  return arrAll;
}

console.log("問題5の解答")
actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。


//問題6
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
*/

function getEvenNumbers(arr) {
  let arr2 = [];
  for(let num of arr) {
    if(num % 2 == 0) {
      arr2.push(num);
    }
  } return arr2;
}

console.log("問題6の解答")
actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。


//問題7
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @param {number} ??? - 配列の中の数字にかける数字
 * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
 */

function getMultipliedArray(arr, num) {
  let newarr = [];
  for(let cal of arr) {
    newarr.push(cal*num);
  } return newarr;
}

console.log("問題7の解答")
actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。


//問題8(解きなおし)
/**
 * 
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */

function isSorted(arr) {
  let bool = [];
  for(let i = 0; i < arr.length-1; ++i) {
    if(arr[i] < arr[i+1]) {
      bool.push("true");
    } else {
      bool.push("false");
    }
  } 
  return bool.indexOf("false") === -1;
}


console.log("問題8の解答")
actual = isSorted([1, 2, 3]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isSorted([3, 2, 3]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
actual = isSorted([1, 2, 3, 4]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


//問題9
/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */

function countOccurrences(arr) {
  const count = arr.reduce(
    (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
    new Map()
  );
  let maxNum = [...count.values()];
  maxNum = Math.max.apply(null, maxNum);
  return maxNum;
}


console.log("問題9の解答")
actual = countOccurrences([1, 2, 3], 2);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, 2], 2);
expected = 2;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。


//問題10
/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */

function getOperatedArray(arr, str, num) {
  let cal = [];
  let result = [];
  if(str == "+") {
    for(let arr2 of arr) {
      cal.push(arr2 + num);
    }
  } else if (str == "-"){
    for(let arr2 of arr) {
      cal.push(arr2 - num);
    }
  } else if (str == "*"){
    for(let arr2 of arr) {
      cal.push(arr2 * num);
    }
  }  else if (str == "/"){
    for(let arr2 of arr) {
      cal.push(arr2 / num);
    } 
  }else if (str == "**"){
      for(let arr2 of arr) {
        cal.push(arr2 ** num);
      }
  } else if (str == "%"){
      for(let arr2 of arr) {
        cal.push(arr2 % num);
      }
  }
  return cal;
}

console.log("問題10の解答")
actual = getOperatedArray([1, 2, 3], "+", 5);
// [1, 2, 3] のそれぞれの要素に5をたす
// [1+5, 2+5, 3+5]
expected = [6, 7, 8];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
