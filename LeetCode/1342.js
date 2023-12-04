/**
 * @param {number} num
 * @return {number}
 */

function step(result) {
    if(result % 2 === 0) {
        result /= 2;
    } else {
        result -= 1
    } return result;
}

var numberOfSteps = function(num) {
    let count = 0;
    while(num !== 0) {
        num = step(num);
        count++;
    } return count;
};