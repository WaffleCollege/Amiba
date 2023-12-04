/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = "";
    let array = s.split(" ");
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        if(i === array.length-1) {
            result += array[i].split('').reverse().join(''); 
        } else {
            result += array[i].split('').reverse().join('') + " "; 
        }
    } return result;
};