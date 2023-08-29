'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
    }
}


//問題1
/**
* @param {Array<any>} ??? - 配列
* @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
*/

function haveMultipleElements(args) {
    const Args = new Set(args);
    return Args.size === args.length;
}


// テストを実行
test(haveMultipleElements([1, 2, 3, 4]), true);
test(haveMultipleElements([1, 3, 3, 4]), false);


//問題2
function haveMultipleElements(x, y){
  if(x % y){
    return haveMultipleElements(y, x % y)
  }else{
    return y
  }
}

//test(haveMultipleElements(128,56), 2);

//問題3
const hands = new Array("パー", "グー", "チョキ");
const player = "パー"

/**
    * @param {int} min - ランダムで出したい値の最小値
    * @param {int} max - ランダムで出したい値の最大値より1つ大きい値
    *
    * @returns {int}} min 以上 max 未満 の整数値を「ランダムで」出力
    */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 1つめの引数を0, 2つ目の引数を3とすると, 0から2の整数がランダムで出力される
console.log(getRandomInt(0, 3))
let index = getRandomInt(0, 3)

// 上記のgetRandomInt関数と、配列 hands を生かしてジャンケンゲームを作成してみましょう！
if(hands[index] == player) {
  console.log("引き分け");
} else if(hands[index] == "グー") {
  console.log("負け");
} else {
  console.log("勝ち");
}


//問題4
function flatten (theArg) {
  let list = [];
  for(const elem of theArg) {
    if(Array.isArray(elem)) {
      for(const i of elem){
        list.push(i);
      }
    }else{
      list.push(elem);
    }
  }
  return list;
}

console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]

console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
//console.log([1, 2, 3, [4, 5, 6]])

console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
//console.log([[1], [2], [3], [4, 5, 6]]);