'use strict'
// Please don't delete the 'use strict' line above

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

// 上の問題のように、関数testにチェックする内容を全てまとめる
function test(actualExpression, expectedExpression){
    if (actualExpression === expectedExpression) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actualExpression);
        console.log("  expected: ", expectedExpression);
    }
}

/**
 * 引数①: {string} ??? - テストの対象となる文字列
 * 引数②: {number} ??? - 閾値
 * 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
 */
function isLongerThan(text, num) {
    if(text.length > num) {
        return text.length > num;
    } else if(typeof text !== "string") {
        return "Invalid input.";
    } else {
        return text.length > num;
    }
}

actual = isLongerThan("three", 3);
expected = true;

// testを呼び出す
test(actual, expected)

actual = isLongerThan("three", 5);
expected = false;

// testを呼び出す
 test(actual, expected)

actual = isLongerThan(3, 5);
expected = "Invalid input.";

// testを呼び出す
test(actual, expected)


//問題2
function isOddWithoutIf(number) {
    return number % 2 == 1;
}

actual = isOddWithoutIf(3);
expected = true;

// testを呼び出す
 test(actual, expected)

actual = isOddWithoutIf(4);
expected = false;

// testを呼び出す
test(actual, expected)


//問題3
let list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
function getSimpleNumberName(num) {
    return(list[num]);
}

actual = getSimpleNumberName(0);
expected = "zero";

// testを呼び出す
test(actual, expected)


actual = getSimpleNumberName(5);
expected = "zero";

// testを呼び出す
test(actual, expected)



//問題4
function getRegularConvexPolygonName(num) {
    let list2 = ["triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"]
    return (list2[num-3])
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";

// testを呼び出す
test(actual, expected)

actual = getRegularConvexPolygonName(5);
expected = "pentagon";

// testを呼び出す
test(actual, expected)


//問題5
//問題5-1
function randomNumber(number) {
    return Math.random() * number;
}

console.log(randomNumber(5));


//問題5-2
function guessMyNumber(number) {
    let random = Math.floor(Math.random() * 5);
    if(number > random) {
        console.log("YES!");
    } else {
        console.log("NO!");
    }
}

console.log(guessMyNumber(3));