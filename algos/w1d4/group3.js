// Group Participation: Chris Hatfield, Beverly Kwok
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

[900, 700, 600, 400, 100, 250]

function partition(arr, left = 0, right = arr.length - 2) {
    var pivot = arr[arr.length - 1];

    while (!arr[left] > arr[right] && !arr[right] > arr[pivot]) {
        right--;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];


    while (!(arr[left] > arr[right]) && (!arr[right] > arr[pivot])) {
        left++;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];



    swap()



}




// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition<l1



for (var i = 0; i < middle; i++) {
    if (arr[middle] < arr[i]) {

    }
}
for (var j = right; j > middle; j--) {
    if (arr[middle] > arr[j]) {

    }
}

// for (var i = 0; i < middle; i++) {
// for (var j = right; j > middle; j--) {

// }
// },||)