// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1, 2,2,2,7], [2,2,6,6,7]
//          1, 2, 7        2, 6, 7
// output: [2,7]

// input: [], [1, 2, 3],
// output: []

function intersection(arr1, arr2) { // array
    let idx1 = 0;
    let idx2 = 0;

    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = [];

    // as long as we don't read off an array

    // while loop is a for loop + an if statement
    while (idx1 < len1 && idx2 < len2) {
        // walk the smaller idx forward
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            idx2++;
            // else they are equal
        } else {
            // double check we've not already added this number
            if (result[result.length - 1] !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            // walk forward both indexes
            idx1++;
            idx2++;
        }
    }
    return result;
}

// arr1 = [1,2,2,2,7];
// idx1               5

// arr2 = [2,2,6,6,7];
// idx2               5

// result = [2, 7];


// input
// are they always the same length? no
// are they always going to be arrays? yes

// are they always sorted? yes
// always integers? yes
// always positive? yes

// can they be empty? yes


// output
// can we create a new array, or must this be done in place? new array

// sets by definition do not contain duplicates

// .includes() recommend not
// functional solution allowed

// O(n)