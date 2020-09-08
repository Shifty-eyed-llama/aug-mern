//Chris Hatfield,Christian Land, Hana Luong, Matthew Merrill
// Intersect Sorted Arrays

// Combine two already sorted multi-set arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, de-duped.

let array1 = [1, 2, 2, 2, 7];
let array2 = [2, 2, 6, 6, 7];
// output: [2,7]

// input:
let array3 = [];
let array4 = [1, 2, 3];
// output: []

// input:
let array5 = [1, 5, 7, 0, 8];
let array6 = [1, 5, 8];

function intersection(arr1, arr2) {
    if (!arr1.length || !arr2.length) {
        return [];
    }

    let newSet = new Set();
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else if (arr2[j] == arr1[i]) {
            newSet.add(arr2[j]);
            j++;
            i++;
        }
    }
    return Array.from(newSet);
}
console.log(intersection(array1, array2));
console.log(intersection(array3, array4));
console.log(intersection(array5, array6));