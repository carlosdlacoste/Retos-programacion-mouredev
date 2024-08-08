/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 *  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] == 0){
            nums1.splice(i, 1)
            i--
        }
    }
    for(let j = 0; j < nums2.length; j++){
        nums1.push(nums2[j])
    }
    if(m + n == nums1.length) nums1.sort()
    return nums1
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

console.log(merge(nums1, m, nums2, n)) // [1,2,2,3,5,6]


