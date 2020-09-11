// challenge #1

// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Worst case: O(N^2)
function twoSums(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }

    return [];
}

// challenge #2

// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

// allNonConsecutive(nums)

// Given a sorted array of positive ints, find all the non-consecutive integers
// A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

// The first element is never considered non-consecutive.

// Return an array of objects where each object contains the number itself
// and it's index.

// Input: [1,2,3,4,6,7,8,10]

// 6 and 10 are the only non-consecutive numbers

// Output: [
//  {i: 4, n:6},
//  {i: 7, n:10}
// ]

// Worst case: O(N)
function allNonConsecutive(nums) {
    if (nums.length < 2) {
        return [];
    }

    let output = [];
    let last = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - last !== 1) {
            output.push({ i: i, n: nums[i] });
        }
        last = nums[i];
    }
    return output;
}