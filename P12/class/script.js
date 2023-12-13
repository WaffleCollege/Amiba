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
    * @param {Array<number>} ???
    * @returns {Array<string>} 与えられた配列の中にある、数字それぞれに20点追加した点数の配列。ただし、最大100点とし、20点加点した結果、100点を越える場合は、その要素は100とする
    */

// ここにコードを書きましょう
function giveBonusPoints(array) {
    let result = [];
    for(const new_array of array) {
        let new_score = Math.min(new_array + 20 , 100);
        result.push(new_score);
    }
    return result;
}

   const points = [10, 60, 20];
   const points2 = [10, 90, 85];

   test(giveBonusPoints(points), [30, 80, 40]);
   test(giveBonusPoints(points2), [30, 100, 100]);


/**
	* @param {Array<Object>} ???
	* @returns {Array<string>} 与えられた配列の中にある、Level45以上のPokemonオブジェクトのみを要素として持つ配列
	*/


    function getStrongPokemon(arr){
        return arr.filter((x) => {
            if (x["level"] > 45) {
                return x;
            }
        })
    }    
    
    const pikachu = {"name": "Pikachu", "level": 24};
    const hitokage = {"name": "Hitokage", "level": 50};
    const charizard = {"name": "Charizard", "level": 75};
    const pachirisu = {"name": "Pachirisu", "level": 32};
    const pokemonList = [pikachu, hitokage, charizard, pachirisu]
    test(getStrongPokemon(pokemonList), [hitokage, charizard]);
    