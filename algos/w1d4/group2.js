// Array: Partition/Beth/James/Clint

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
    var pivot = arr[Math.floor(arr.length / 2)];
    for (var i = 0; i <= arr.length / 2; i++) {          //while(arr[i] < pivot){
        if (arr[i] > pivot) {                                //while(arr[i]>pivot){ iterate j until it gets stuck if i and j both stuck swap}
            var temp = arr[i];                         //}
            //arr[i] = arr [j]
            //
        }
    }
    for (var j = arr.length - 1; j > arr.length / 2; j--) {

    }
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor(arr.length / 2)];
    while (left < pivot) {

        //only start moving 'right' after left is stuck waiting on a value to swap with on the right
        while (arr[left] < arr[right]) {
            left++
            //iterate right
        }
        //iterate left
    }
}


// 1 2 3 4 5 arrary
// 0 1 2 3 4 index

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition
i          p            j
// let arr = [88, 22, 11, 55, 111, 99, 33];
// partition(arr, 0, arr.length-1);

ip   j
// let arr = [33, 22, 11, 55, 11, 99, 88];