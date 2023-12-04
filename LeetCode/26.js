/**
 * @param {number[]} nums
 * @return {number}
 */

let result = [];
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // 空の配列の場合は0を返す

    let count = 1; // ユニークな要素の数をカウントする変数

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[count] = nums[i]; // ユニークな要素を配列の前方に移動
            console.log(nums[count]);
            count++;
            console.log(count);
        }
    }
    return count; // ユニークな要素の数を返す
};