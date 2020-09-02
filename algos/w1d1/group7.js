// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    var loop = arr.length()

    while (loop > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1]
            }
        }

    }



    def bubbleSort(some_list):
        loop = len(some_list) - 1
    while loop > 0:
        if some_list[i] > some_list[i + 1]:
        some_list[i], some_list[i + 1] = some_list[i + 1], some_list[i]
    for i in range(len(some_list) - 1):
        loop -= 1
    return some_list




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
    // https://www.geeksforgeeks.org/selection-sort/++{}{

}
0 lop0larr = ararr[i + 1][i]