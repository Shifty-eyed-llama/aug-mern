//Group 5 participants - Daniel Havens, Matthew Merrill, Jennifer Joy, Robert Orellana


// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a value 1-255

// Find all the consecutive groups of integers that add up to the value k

// sum = 16
// arr = [2,5,3,6,7,0,0,23,10,10,55,6]

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

// your arr can be empty

//Psuedo Code//
//create a sum variable
//create a new array to return consecutive values
//Use a for loop to look at each value of the array using two index positions(i and j)
//If the value is less than the given K, store the value and move to the next value
//Add the stored value to the next value
//If the values add up to more than the given K, clear the sum and move to the next value
//If the values add up to exactly the given K, push both values into a return array

function findConsecutiveSums(nums, Ksum) {
    const consums = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == Ksum) {
            consums.push(nums[i])
        }
        let sum = nums[i];
        if (nums[i] < Ksum) {
            for (let j = i; j < nums.length; j++) {
                if (sum + nums[j] == Ksum) {
                    consums.push(nums[i]);
                    consums.push(nums[j]);
                }
                if (sum + nums[j] < Ksum) {
                    sum += nums[j];
                    j++;
                } else { break }
            }
        }
    }
    return consums;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 10, 10, 55, 6], 16))