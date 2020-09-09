//Group: Christian Land, James Hartung, Michelly Richardson, Chris Hatfield

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

// your arr can be emptyfunction consecSums(arr,k){
function consecSums(arr, k) {
    if (!arr.length || (arr.length === 1 && arr[0] !== k)) {
        return [];
    } else if (arr.length === 1 && arr[0] === k) {
        return arr;
    }
    let groups = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        let group = [arr[i]];
        let j = i + 1;
        while (sum <= k) {
            if (sum === k) {
                groups.push([...group]);
                if (arr[j] === 0) {
                    group.push(0);
                } else {
                    break;
                }
            } else {
                group.push(arr[j]);
                sum += arr[j];
            }
            j++;
        }
    }
    return groups;
}
let k = 16;
const myArr = [2, 5, 3, 6, 7, 0, 0, 23, 10, 10, 55, 6];
console.log(consecSums(myArr, k));