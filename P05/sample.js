const code = "hello!";

for (const c of code){
    console.log(c)
}

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
    
// 1文字ずつ表示されるのを確認できましたか？？
// 以下の問題3、4では、この扱い方を用いて挑戦してみてください！


   /**
    * @param {string} ???
    * @returns {number} 与えられた文字列の中で母音(a, i, u, e, o)の合計の数を返す
    */
   // ここにコードを書きましょう.
   function countVowel(str) {
    let count = 0;
    for(const a of str) {
        if(a == "a" || a == "i" || a == "u" || a == "e" || a == "o") {
            count++;
        }
    }
    return count;
   }


   test(countVowel("hello"), 2);
   test(countVowel("WaffleCollege"), 5);


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

  console.log(pokemons[0]); // ???
  console.log(pokemons[1].Name); // ???
  console.log(pokemons[0]["Name"]); // ???
  console.log(pokemons[2]["About"]); // ???
  console.log(pokemons[2].Types[0]); // ???