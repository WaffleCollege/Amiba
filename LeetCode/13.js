/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    RomanNum = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
    let result = 0;

    let ReStr = s.split("").reverse();

    for(i = 0; i < ReStr.length; i++) {
        let str1 = ReStr[i];
        let str2 = ReStr[i+1];
        if(RomanNum[str1] > RomanNum[str2]) {
            ResultNum = RomanNum[str1] - RomanNum[str2];
            result = result + ResultNum;
            i++;
        } else {
            result = result + RomanNum[str1];
        }
    } return result;
};