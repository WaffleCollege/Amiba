'use strict'
// Please don't delete the 'use strict' line above

//問題1
function numberOfPeople(arrayOfPeople) {
    console.log(arrayOfPeople.length);
}

console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4


//問題2
// ここに,配列studentsを作成するコードを書きましょう.
let students = ["Alex", "Beau", "Carlos", "Dustin", "Nuncy"];
function numberOfPeople(students) {
    console.log(students.length);
}

console.log(numberOfPeople(students)); // => 5


//問題3
students.push("Ami", "Sakura", "Tom");

console.log(numberOfPeople(students)); // => 8


//問題4
function last(array) {
    console.log(array[array.length - 1]);
}

console.log(last(["Tom", "Alex", "Nuncy", "Ami"]));
