Group: Umer Mahmood, Yun zhuo Zhou, Joseph Sunderland, Justin Clayton

// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a value 1-255

// Find all the consecutive groups of integers that add up to the value k

// sum = 16
// arr = [2,5,3,6,7,0,0,23,10,10,55,6] [2,5,3,7,0, 0, 10,6]
//                                                    i  j

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

// your arr can be empty


function consecutiveSum(arr, k) {
    var newArr = [];
    var i = 0;
    var j = 0;
    var sum = 0;
    var result = [];
    while (i < arr.length && j < arr.length) {
        if (sum < k) {
            sum += arr[j];
            newArr.push([arr[j]); j++;
            }
            if (sum > k) {
                sum = sum - arr[i];
                newArr.shift();
                i++;
            }
            if (sum == k) {
                result.push(Array.from(newArr));
                j++;
                sum += arr[j];
            }

        }
        return result;

    }

    // Worst case: O(N^2) (Array of just 0s)
    // Average: Theta(lN) (l - average length of solutions)
    // Best case: Omega(N) (Array of just ks)
    function consecutiveSum2(arr, k) {
        let outputs = []

        for (let i = 0; i < arr.length; i++) {
            let currSum = arr[i];
            let currSol = [arr[i]];
            let nextIdx = i + 1;

            while (currSum <= k && nextIdx < arr.length) {
                if (currSum === k) {
                    outputs.push([...curSol]);
                }
                currSol.push(arr[nextIdx]);
                currSum += arr[nextIdx];
                nextIdx++;
            }
        }

        return outputs;
    }.;
    hft()() + la