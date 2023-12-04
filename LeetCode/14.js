/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ""
    if (strs.length === 0) {
        return result;
    } else if (strs.length === 1) {
        result = strs[0];
        return result;
    }

    let Resort = strs.sort();

    let str = Resort[0];
    let str2 = Resort[Resort.length - 1];
    console.log(str.length > str2.length);
    if(str.length > str2.length) {
        for(let i = 0; i <= str.length; i++) {
            if(i === 0) {
                if(str.slice(0) === str2.slice(0, 1)) {
                    result = str.slice(0);
                }
            }
            if(str.slice(0, i) === str2.slice(0, i)) {
                result = str.slice(0, i);
            } 
        } return result;
    } else {
        for(let i = 0; i <= str.length; i++) {
            if(i === 0) {
                if(str2.slice(0, 1) === str.slice(0)) {
                    result = str.slice(0);
                }
            } else {
                if(str.slice(0, i) === str2.slice(0, i)) {
                    result = str.slice(0, i);
                }   
            } 
        } return result;
    }
};




/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
    const array = strs.sort();
    const first = array[0];
    const last = array[array.length-1];
    
    if(first.slice(0,1) !== last.slice(0,1)){
    return "";
    }else if(first === last){
    return first;
    }
    let ans = first.slice(0,1);
    for(let i = 1; i < first.length; i++){
    if(first.slice(i,i+1) === last.slice(i,i+1)){
    ans += first.slice(i,i+1);
    }else{
    return ans;
    }
    }
    return ans;
};