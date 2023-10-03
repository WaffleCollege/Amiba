/* exported rockPaperScissors */

//問題1-1
/*const rockPaperScissors = (rounds = 3) => {
  let out = [];
  const weapons = ["rock", "scissors", "paper"];
  const play = (rounds, result = []) => {
    // exit case
    if (rounds < 1) {
      out.push(result);
      return;
    }
    // recursive case
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      play(rounds - 1, result.concat(weapon));
    }
  };
  play(rounds);
  return out;
};

console.log("問題1-1の回答")
console.log(rockPaperScissors());
*/


//問題1-2
let n = "";
const rockPaperScissors = (rounds = n) => {
  let out = [];
  const weapons = ["rock", "scissors", "paper"];
  const play = (rounds, result = []) => {
    // exit case
    if (rounds < 1) {
      out.push(result);
      return;
    }
    // recursive case
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      play(rounds - 1, result.concat(weapon));
    }
  };
  play(rounds);
  return out;
};

//console.log("問題1-2の回答")
console.log(rockPaperScissors(3));