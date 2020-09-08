// Intersect Sorted Arrays/ James/ Beth

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1, 2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {}

function intersection(arr1, arr2) {

    var newArr = []

    if (arr1.length < 1 || arr2.length < 1) {
        return [];
    }

    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] >= arr2[j]) {
                if (arr1[i] == arr2[j] && !newArr.includes(arr1[i])) {
                    newArr.push(arr1[i]);
                }
            }
        }
    }
    return newArr;
}

arr1 = [1, 2, 2, 2, 7, 8, 10]
arr2 = [2, 2, 6, 6, 7, 10, 10]

console.log(intersection(arr1, arr2))