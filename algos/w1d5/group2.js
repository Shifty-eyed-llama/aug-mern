//Joseph Sunderland,chris Hatfield,Hana Luong, Hector,Eduardo

let quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (right - left < 1) {
        return arr;
    }
    let pivotIndex = partitionHoare(arr, left, right);
    if (arr[left] < arr[pivotIndex - 1]) { // left side
        console.log("if statement quicksort is running")
        quickSort(arr, left, pivotIndex - 1)
    } else if (arr[right] > arr[pivotIndex]) {
        console.log("elseif statement quicksort is running")
        quickSort(arr, pivotIndex + 1, right) // right side
    }
}
return arr;
}
let myArr = [99, 2, 1001, 29, 37, 17];
console.log(quickSort(myArr));

}

// const pivot = PartitionHoare(arr, left, right);

// quickSort(arr, left, pivot - 1);
// quickSort(arr, pivot, right);

function partitionHoare(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    console.log("partitionHoare is running")
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