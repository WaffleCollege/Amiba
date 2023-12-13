var getConcatenation = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        nums.push(nums[i]);
    } return nums;
}; //57ms

var getConcatenation = function(nums) {
    return nums.concat(nums);
}; //60ms