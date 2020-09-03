//group:Joseph Sunderland, Hana L,Yunuo Zhou,Justin Clayton
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


function partition(arr, left = 0, right) {


    var len = arr.length;
    right = len;
    var pivotIndex = Math.floor((right + left) / 2)
    var pivot = arr[pivotIndex]; //middle index

    // Move partiton to the end
    var temp = arr[len - 1]
    arr[len - 1] = pivot;
    arr[pivotIndex] = temp;

    // Partition the SubArray
    right = len - 2;
    while (arr[left] < pivot) {
        left++;
    }
    while (arr[right] > pivot) {
        right--;
    }

    // Swap values
    temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;

    return partition(arr, left, right)
        //this is where we would do the swap


}

function partition(arr, start = 0, end = arr.length - 1) {
    //1st one was way over thinking it
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    //We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {

    }
}




// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partitionl Matho[]a>temreturn()hing