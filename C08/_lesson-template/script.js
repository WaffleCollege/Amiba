"use strict";
// Please don't delete the 'use strict' line above

let arr = [1, 5, 4, 3, 8, 7, 6, 10, 18, 2];
console.log(mergeSort(arr));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //N個の要素からなる列を、それぞれn/2個の要素からなる列A、列Bに分割する。
  const middle = Math.floor(arr.length / 2);
  let A = arr.slice(0, middle);
  let B = arr.slice(middle);
  //console.log(A,'A');
  //console.log(B,'B');

  let mergeA = mergeSort(A);
  let mergeB = mergeSort(B);
  //console.log(mergeA,'mergeA');
  //console.log(mergeB,'mergeB')

  let result = merge(mergeA, mergeB);
  return result;
}
//2. マージ(統合)
//整列されているAの列と、Bの列と、空のCの列
//以下の操作を、列A、列B全てが空になるまで繰り返す。
//列Aが空であれば、列Bで最小の要素を列Cに移す
//列Bが空であれば、列Aで最小の要素を列Cに移す
//どちらでもなければ、列Aの最小の要素と列Bの最小の要素のうち、小さい方を列Cに移す。

function merge(A, B) {
  let C = [];
  let aIndex = 0;
  let bIndex = 0;

  //以下の操作を、列A、列B全てが空になるまで繰り返す。
  while (aIndex < A.length && bIndex < B.length) {
    //どちらでもなければ、列Aの最小の要素と列Bの最小の要素のうち、小さい方を列Cに移す。
    if (A[aIndex] < B[bIndex]) {
      C.push(A[aIndex]);
      aIndex = aIndex + 1;
    } else {
      C.push(B[bIndex]);
      bIndex = bIndex + 1;
    }
  }
  //列Aが空であれば、列Bで最小の要素を列Cに移す
  while (aIndex < A.length) {
    C.push(A[aIndex]);
    aIndex = aIndex + 1;
  }
  //列Bが空であれば、列Aで最小の要素を列Cに移す
  while (bIndex < B.length) {
    C.push(B[bIndex]);
    bIndex = bIndex + 1;
  }

  return C;
}
