// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted
var testArr = [3, 4, 2, 1, 8, 9];

function bubbleSort(arr) {
    var temp = 0;
    for (i = 0; i < arr.length - i - 1; i++) {

    }
    for (j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    return arr;


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

    function selectionSort(arr) {
        let min = arr[0];
        let counter = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < min)
                min = arr[i];
        }
        counter++


        // Time Complexity
        //   - Best: O(n^2)
        //   - Average: O(n^2)
        //   - Worst: O(n^2)

        // https://www.programmingsimplified.com/images/c/selection-sort.png
        // https://www.geeksforgeeks.org/selection-sort/i==,8,()ii<arr.length;i=<arr.length;i++ari