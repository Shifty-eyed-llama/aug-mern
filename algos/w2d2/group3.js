// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1, 2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    let newArr = [];
    let idx1 = 0;
    let idx2 = 0;

    while (arr1[idx1] && arr2[idx2]) {
        while (arr1[idx1] && arr1[idx1] < arr2[idx2]) {
            idx1++;
        }
        while (arr2[idx2] && arr2[idx2] < arr1[idx1]) {
            idx2++;
        }
        if (arr1[idx1] && arr2[idx2]) {
            const item = arr1[idx1];
            newArr.push(item);
            while (arr1[idx1] && arr1[idx1] === item) {
                idx1++;
            }
        }
    }
    return newArr;
}

function intersection2(arr1, arr2) {
    let idx2 = 0;
    let lastVal;
    return arr1.filter(val => {
        while (arr2[idx2] && arr2[idx2] < val) {
            idx2++;
        }
        if (val !== lastVal && val === arr2[idx2]) {
            lastVal = val;
            return true;
        }
        return false;
    });
}