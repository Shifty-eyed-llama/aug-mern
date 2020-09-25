// Christian Land, Robert Orellana, Ryan Marean

// https://leetcode.com/problems/trapping-rain-water/
// https://www.geeksforgeeks.org/trapping-rain-water/

// for loop to traverse arr
// for each value look ahead/runner to find next arr value equal to or greater than current index, but not adjacent to it
// calculate the volume of bowl
// runner becomes next index


function trapRainwater(arr) {
  let water = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = (i+1); j < arr.length; j++) {
      if (arr[j] >= arr[i] && j !== i+1) {
        water +=
      }
    }
  }
}



/*
loop through the array searching for elements that are greater than or equal to 1
if one is found,look forward to see if the next column is shorter
if not continue to the next column
if it is then continue looking forward until another column of greater than or equal height is found
if found then calculate volume between the columns
if not found then look forward subtracting 1 unit of height until a match is found
if still no match when at 1 height then return
*/

function rainwater(arr){
    let water = 0;
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] >= 1){
            if(arr[i+1] < arr[i]){
                let end = i+1;
                let startHeight = arr[i];
                while(arr[end] < startHeight){
                    arr[end]++;
                    if(startHeight === 1 && arr[end] >= startHeight){
                        water += 1 * end-(i+1)
                    } else if(arr[end] >= startHeight){
                        water += rainwater(arr.slice(i,end));
                    } else if(startHeight === 1 && end === arr.length-1){
                        return water;
                    }else if(end === arr.length-1){
                        startHeight--;
                        end = i+1;
                    }
                }
            } else {
                continue;
            }
        } else{
            continue;
        }
    }
    return water;
}

function calcWater(array) {

}

arr.slice(startHeight,end)