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


//問題1
let a = "B";
let b = "A";

// ここにあなたのコードを書いてください
let c = b;
b = a;
a = c;

console.log("問題1の解答");
console.log(a); // "A" を表示
console.log(b); // "B" を表示


//問題2
function validCredentials(username, password) {
    return username.length > 5  && password.length > 7;
}

console.log("問題2の解答");
test(validCredentials("amiba", "1234"), false);
test(validCredentials("matoba", "12345678"), true);
test(validCredentials("matoba", "1234"), false);
test(validCredentials("amiba", "12345678"), false);


//問題3
const pokemons = [
    {
      Number: "001",
      Name: "Bulbasaur",
      Generation: "Generation I",
      About:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      Types: ["Grass", "Poison"],
    },
    {
      Number: "025",
      Name: "Pikachu",
      Generation: "Generation I",
      About:
        "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
      Types: ["Electric"],
    },
    {
      Number: "019",
      Name: "Rattata",
      Generation: "Generation I",
      About:
        "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
      Types: ["Normal"],
    },
  ];

/**
 * @param {Array<object>} ??? - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */

// ここにコードを書きましょう.
function getNames(arr) {
    let pokemonName = [];
    for(let i = 0; i < arr.length; i++) {
        pokemonName.push(arr[i]["Name"]);
    } return pokemonName; 
}

// 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。

console.log("問題3の解答")
test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);


//問題4
// function printCars() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     let i = 0;
  
//     while (i < cars.length) {
//       console.log(cars[i]);
//       i++;
//     }
// }

function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    let i = 0;
  
    for(let i = 0; i < cars.length; i++) {
      console.log(cars[i]);
    }
}

console.log("問題4の解答");
console.log(printCars());


//問題5-1
let elements = document.getElementsByClassName("athing");
for(let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'red';
}


//問題5-2
let elements2 = document.getElementsByClassName("athing");
for(let i = 0; i < elements2.length; i++) {
    if(i%2 === 0) {
        elements2[i].style.backgroundColor = 'red';
    } else {
        elements2[i].style.backgroundColor = 'green';
    }
}


//問題6
		/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function  getQuestions(arr) {
    return arr.filter((x) => {
        let str = x.substring(0,1);
        if(str === str.toUpperCase() && x.indexOf("?") !== -1) {
            return x;
        }
    }) 
}

const arrayOfStrings3 = [
    "Hi, there.",
    "What in the world?",
    "My name is JavaScript",
    "Do you want to know a secret?",
  ];
 
  console.log("問題6の解答");
  test(getQuestions(arrayOfStrings3), [
    "What in the world?",
    "Do you want to know a secret?",
  ]);
  test(getQuestions(arrayOfStrings3.slice(2)), [
    "Do you want to know a secret?",
  ]);