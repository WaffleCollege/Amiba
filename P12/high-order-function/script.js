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
 * @returns {number} 与えられた引数の絶対値
 */
// ここにコードを書きましょう
function abs(number) {
    return Math.abs(number);
}

console.log("問1の解答");
test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);


//問2
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
 */
// ここにコードを書きましょう
function getIncrementedNumbers(arr) {
    return arr.map((x) => {
        return x + 1;
    }
    )
}

console.log("問2の解答");
test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);


/**
 * @param {Array<number|string>} ???
 * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
 */
// ここにコードを書きましょう
function getSwitched(arr) {
    return arr.map((x) => {
        if(typeof x === "string") {
            return Number(x);
        } else {
            return String(x);
        }
    })
}

console.log("問3の解答");
test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);