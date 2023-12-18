'use strict'
// Please don't delete the 'use strict' line above

//問題1
const number = 10;
let sum = 0;

for(let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum +=  i;
    } 
}
console.log(sum);

//問題2
let result2 = 0;
let result3 = 0;
for(let i = 0; i < 1000; i++) {
    for(let j = 0; j < 1000; j++) {
        let num = i*j;
        let numString = String(num);
        if(numString === numString.split('').reverse().join('')) {
            if(result2 < num) {
                result2 = num;
            }
        }
    }
}
console.log(result2);