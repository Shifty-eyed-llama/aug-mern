// Array: Quick Sort
// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https: //upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif

// Create a function that uses yesterday’s partition to sort an array in-place.

//   Time Complexity
//     - Best: O(n log(n))
//     - Average: O(n log(n))
//     - Worst: O(n^2)


//   Steps:
// - recursively partition the array
// - start by partitioning the full array (use the previously built partition algo)
// - then partition the left side of the array (left of new pivot idx)
//   and the right side (right of new pivot idx), recursively


// [77, 44, 22, 13, 9, 88, 99, 55, 33];
// [77, 44, 22, 13]
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    const pivot = PartitionLomuto(arr, left, right);

    quickSort(arr, left, pivot - 1); // [77, 44, 22, 13]
    quickSort(arr, pivot, right); // [9, 88, 99, 55, 33]

    return arr;
}

var x = [1, 2, 3];
var y = x;
y.push(4)

// x [1,2,3,4]
// 'pass by reference'

// 'pass by value'
// number, integers, floats


// Array: Partition

// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

let swap = (arr, i, j) => {
    // swap two indexes in an array
    [arr[i], arr[j]] = [arr[j], arr[i]]
};


let PartitionLomuto = (arr, left, right) => {
    if (left === undefined) {
        left = 0;
    }

    if (right === undefined) {
        right = arr.length - 1;
    }
    // select a pivot
    const pivot = arr[right];
    // start at the left most index
    let i = left;

    // looping from the left index until the right
    for (let j = left; j < right - 1; j++) {
        // if that value is less than or equal to the pivot
        if (arr[j] <= pivot) {
            // swap!
            swap(arr, i, j);

            // and move i!
            i++;
        }
    }
    // final swap to put the pivot back in the right spot
    swap(arr, i, right);

    // and return it's index
    return i;
}

// Sir Charles Antony Richard Hoare partitioning scheme
function partitionHoare(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot && left <= right) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return left;
}

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition



// Radix Sort
// https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

// setup
function getPosition(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// get num with most digits
function getMax(arr) {
    let max = 0;
    for (let num of arr) {
        if (max < num.toString().length) {
            max = num.toString().length;
        }
    }
    return max;
}

// setup
function radixSort(arr) {
    const max = getMax(arr); // length of the max digit in the array

    for (let i = 0; i < max; i++) {

        let buckets = Array.from({ length: 10 }, () => []);
        
        for (let j = 0; j < arr.length; j++) {
            buckets[getPosition(arr[j], i)].push(arr[j]); // pushing into buckets
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([4, 57, 7, 3, 933])); // [3,4,7,57,933]