// group 6: Bryan Birch, Matthew Merrill, Hector Eduardo
// Array: Partition

// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value


function partition(arr, left, right) {

}

function partition(arr) {
    var pivot = arr[arr.length - 1];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            for (var j = arr.length - 1; j > i; j--) {
                if (arr[j] < pivot) {
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    }
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > pivot) {
            swap(arr, x, arr.length - 1)
        }
    }
    return arr;
}

let swap = (arr, i, j) => {
    // swap two indexes in an array
    [arr[i], arr[j]] = [arr[j], arr[i]]
};


var unsort = [4, 7, 1, 5, 9, 2, 0, 3, 6, 8];
partition(unsort); //   ==>   [4, 1, 2, 0, 3, 9, 8, 7, 6, 5]

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition