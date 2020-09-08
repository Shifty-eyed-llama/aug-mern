// Group: Ryan Marean, Bryan Birch, Daniel H, Ryan
// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]


function intersectSortedArraysDedupe(arr1, arr2) {
    //if arrays are empty, return an empty array
    if (len1 == 0 || len2 == 0) {
        return newArr;
        let idx1 = 0,
            idx2 = 0;

        const len1 = arr1.length,
            len2 = arr2.length,
            orderedIntersection = [];

        while (idx1 < len1 && idx2 < len2) {
            if (arr1[idx1] === arr2[idx2]) {
                if (orderedIntersection[orderedIntersection.length - 1] !== arr1[idx1]) {
                    orderedIntersection.push(arr1[idx1]);
                }
                idx1++;
                idx2++;
            } else if (arr1[idx1] < arr2[idx2]) {
                idx1++;
            } else {
                idx2++;
            }
        }
        return orderedIntersection;
        console.log(orderedIntersection)
    }



    console.log(intersectSortedArraysDedupe([0, 1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))
}

let len1 = arr1.length
let len2 = arr2.length
idx1 = 0
idx2 = 0
let newArr = [];
while (idx1 < len1 && idx2 < len2) {
    if (arr1[idx1] == arr2[idx2]) {
        newArr.push(arr1[idx1])
        idx1++;
        idx2++;
    }
    if (arr1[idx1] < arr2[idx2]) {
        idx1++;
    } else {
        idx1++
        idx2++
    }
    console.log(newArr)
    return newArr
}

}

if (len1 > len2) {
    for (var i = 0; i < arr1.length; i++) {
        while ()

            if (arr1[i])
    }
}
} +


function binaryCheck(int, arr) {
    let len = arr.length;
    let mid = Math.floor(len / 2);
    if (len == 0) {
        return false;
    }
    while (len > 1) {
        if (arr[mid] < int) {
            let right = arr.slice(mid, arr.length + 1);
            return binaryCheck(int, right);
        } else if (arr[mid] > int) {
            let left = arr.slice(0, mid);
            return binaryCheck(int, left);
        } else if (arr[mid] == int) {
            return true
        }
    }
    return false;
}

function intersection(arr1, arr2) {
    let newArr = [];
    if (arr1.length == 0 || arr2.length == 0) {
        return newArr;
    }
    if (arr1.length >= arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (binaryCheck(arr1[i], arr2)) {
                newArr.push(arr1[i])
            }
        }
    }
    return newArr;
}