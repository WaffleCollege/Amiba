/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pair = {"(":")", "[":"]", "{":"}" }
    let stack = [];
    if(s.length % 2 !== 0) {
        return false;
    } else {
        for(let i = 0; i < s.length; i++) {
            if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
                stack.push(s[i]);
            } else {
                if(pair[stack.pop()] === s[i]) {
                    continue;
                } else {
                    return false;
                }
            }
        }  return stack.length === 0;
    }
};