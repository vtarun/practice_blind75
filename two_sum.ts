/*
* Problem Statement: 
* Given an array of integers nums and an integer target, 
    return indices of the two numbers such that they add up to target.
*/

/*
My approach:
Declare a Map, it will store elements from array and corresponding index.
Go through each element of the array. 
Check if other element is present in the Map. 
    If no then add into it. 
    If Yes that means the element is present and return both indices.
*/



function twoSum(nums: number[], target: number): number[] {
    const result = new Map<number, number>();
    for(let i = 0; i< nums.length; i++){
        const anotherValue = target - nums[i]; 
        if(result.has(anotherValue)){
            return [i, result.get(anotherValue)];
        }
        result.set(nums[i], i);
    }
};