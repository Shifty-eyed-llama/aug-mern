// challenge #1

// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats, duplicates possible

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {
    let idx1 = 0;
    let idx2 = 1;
    const output = [];
    while (idx1 !== nums.length) {
        if (nums[idx1] + nums[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            return output;
        } else if (idx2 === nums.length) {
            idx1++;
            idx2 = idx1 + 1;
        } else {
            idx2++;
        }
    }
}



function twoSumBetter(nums, target) {

    const map = {};
    // "email" => hashing function => 912237123 => [...]

    // target = 10;
    // nums = [5, 2, 4, 5];
    // {5: 0,
    //  2: 1,
    //  4: 2}

    // objects, dictionaries, hashes, hashMaps, keyvaluepairs, associative arrays
    // hashing

    for (let i = 0; i < nums.length; i++) {
        let missingNumber = target - nums[i];
        if (map.hasOwnProperty(missingNumber)) {
            return [map[missingNumber], i] // [0, 3]
        }
        map[missingNumber] = i;
    }
    return [];
}


// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

// allNonConsecutive(nums)
// 0(n)

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

function allNonConsecutive(nums) {
    const output = [];

    for (let i = 1; i < nums.length; ++i) {
        const prevNum = nums[i - 1];
        const currNum = nums[i];

        if (prevNum + 1 !== currNum) {
            output.push({
                i: i,
                n: currNum
            });
        }
    }
    return output;
}