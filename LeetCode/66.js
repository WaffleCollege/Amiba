//配列を結合して、+1を計算
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = Number(digits.join(""));
    console.log(num);
    let str = String(num + 1);
    console.log(str);
    let result = Array.from(str);
    return result;
};

//謎の挙動
var plusOne = function(digits) {
    if(digits[digits.length - 1] < 9) {
        let result = digits[digits.length - 1] + 1;
        digits[digits.length - 1] = result;
    } else {
        if(digits.length === 1) {
            let result3 = digits[digits.length - 1] + 1;
            digits[digits.length - 1] = 0;
            digits.push(result3);
        }
        let result3 = digits[digits.length - 2] + 1;
        digits[digits.length - 2] = result3;
        digits[digits.length - 1] = 0;
    }
    return digits;
};


//正解
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        } else  {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};