// Group names: Umer Mahmood, Daniel Havens, Daniel Matthew

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
function swap(arr, left, right)
let temp = arr[left];
arr[left] = arr[right]
arr[right] = temp

function partition(arr, left = 0, right = arr.length - 1) {
    var pivot = arr[Math.floor(arr.length % 2)];
    let i = left;
    let j = arr.length - 1;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--
        }
        if (i > = j)
    }

}

function partition(arr, left, right) {
    console.log(left)
    if (left === 0 && right == arr.length - 2) {
        let midIndex = Math.floor(arr.length / 2)
        let end = arr[arr.length - 1]
        let pivot = arr[midIndex]

        arr[midIndex] = end
        arr[arr.length - 1] = pivot
    }

    if (right < left) {
        let pivot = arr[arr.length - 1]
        arr[arr.length - 1] = arr[left]
        arr[left] = pivot
        return arr
    }

    let newLeft = 0
    let newRight = 0

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[left] > arr[arr.length - 1]) {
            newLeft = i
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[right] < arr[arr.length - 1]) {
                    newRight = j
                    rightVal = arr[j]
                    arr[j] = arr[i]
                    arr[i] = rightVal
                    break;
                } else {
                    right--
                }
            }
            break;
        } else {
            left++
        }
    }
    return partition(arr, newLeft, newRight)
}


console.log(partition([88, 22, 11, 55, 111, 99, 33], 0, 5))


// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partitionp:=ef1