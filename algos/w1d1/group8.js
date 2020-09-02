// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indices
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted
[0, 2, 9, 2, 4, 5]


function bubbleSort(arr) {

    var placeHolder = 0;

    while (i = 0; i < arr.length; i++);
    if (arr[i] < arr[i + 1]) {
        arr[i] = i + 1
    } else {
        for (var j = arr.length; j > 0; j--) {
            if (placeHolder > arr[j]) {

            }
        }

    }
    swap arr[0] with arr[1]
    if arr[1] > arr[0]:


        //     let temp = 0;
        // for (let i = 0; i < arr.length; i++) {
        //     for (let j = 1; j < arr.length - i; j++) {
        //         if (arr[j - 1] > arr[j]) {
        //             temp = arr[j];
        //             arr[j] = arr[j - 1];
        //             arr[j - 1] = temp;
        //         }
        //     }

        return arr;
}

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/













// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr) {}


// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png
// https://www.geeksforgeeks.org/selection-sort/c/selection-sort.png
// https://www.geeksforgeeks.org/selection-sort/