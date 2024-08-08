/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counter = {};
    const halfLength = Math.floor(nums.length / 2);

    for (const num of nums) {
        counter[num] = (counter[num] || 0) + 1;
        if (counter[num] > halfLength) {
            return num;
        }
    }
};

let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))