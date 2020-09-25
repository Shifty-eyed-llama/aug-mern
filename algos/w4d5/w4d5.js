// https://leetcode.com/problems/trapping-rain-water/
// https://www.geeksforgeeks.org/trapping-rain-water/


const trapWater = height => {
    // edge cases
	if(!height) return 0;
	if(height.length === 0) return 0;

	let totalWater = 0;

    // loop the height array
	for(let i = 0; i < height.length; i++){
        // initialize the max on the left and the max on the right
		let leftMax = 0,
			rightmax = 0;

        // get leftMAx
		for(let j = 0; j < i; j++){
			leftMax = Math.max(leftMax, height[j]);
		}

        // get rightMax
		for(let j = i + 1; j < height.length; j++){
			rightMax = Math.max(rightMax, height[j])
		}

        // get newWater
		let newWater = Math.min(leftMax, rightMax) - height[i];

        // if it amounts to anything add it
		if(newWater > 0){
			totalWater += newWater;
		}
	}

	return totalWater;
}