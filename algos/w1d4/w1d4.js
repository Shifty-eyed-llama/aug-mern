// Array: Partition//

// https://opendsa-server.cs.vt.edu/embed/quicksortAV
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

let array = [11, 12, 9, 39, 66, 99, 200, 44];
//                                       P
//                       i
//                                       j

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

// let arr = [88, 22, 11, 55, 111, 99, 33];
// partition(arr, 0, arr.length-1);//group:Joseph Sunderland, Hana Luong,Yunuo Zhou,Justin Clayton
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
    let left = 0;
    let right = arr.length - 1;
    var pivot = arr[Math.floor((left + right) / 2)];

    while (left < right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

        }
    }
    return left;
}

//[90, 100, 23, 4, 5, 998, 102, 8, 1000]
// left = 0, right = 8, pivot = 5  => left = 0, right = 7,
// Params: arr, left, right    // - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition