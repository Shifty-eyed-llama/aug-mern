//Robert Orellana,Yunzhuo Zhou,Joseph Sunderalnd
// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1, 2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    if (arr1.length == 0 || arr2.length == 0) {
        return [];
    }
    var newArr = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        if (arr1[i] > arr2[j]) {
            j++;
        }
        if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
            if (newArr.length > 1 && newArr[newArr.length - 1] == newArr[newArr.length - 2]) {
                newArr.pop();
            }
        }
    }
    return newArr;
};
var arr1 = [1, 2, 2, 2, 7];
var arr2 = [2, 2, 6, 6, 7];
console.log(intersection(arr1, arr2));