// group names:
//Jennifer Joy
//Hyunsoo
//Ryan M


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

var arr = [5, 3, 7, 6, 2, 9];


function partition(arr, left = 0, right = arr.length - 1) {
    var pivot = Math.floor(arr.length / 2)
    while (arr[left] != arr[right]) {
        if (arr[left] < arr[pivot]) {
            left++;
        } else if (arr[left] > arr[pivot]) {
            [arr[left], arr[pivot]] = [arr[pivot], arr[left]];
        }
        if (arr[right] > arr[pivot]) {
            right--;
        } else if (arr[right] < arr[pivot]) {
            [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
        }
    }
    return arr;
}

console.log(partition(arr))
    //pivot = math.floor /2

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition