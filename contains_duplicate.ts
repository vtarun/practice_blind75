/*
* Problem Statement: 
* Given an integer array nums, return true if any value appears at least twice in the array, 
*	and return false if every element is distinct.
*/

/*
My approach:
Declare a set, it will store unique elements from array.
Go through each element of the array. 
Check if that element is present in the set. 
	If no then add into it. 
	If Yes that means the element is duplicate.
*/

function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<Number>();
    let currentValue;

    for(let i=0;i<nums.length;i++){
        currentValue = nums[i];
        if(!seen.has(currentValue)){
            seen.add(currentValue);
        }else{
            return true;
        }        
    }
    return false;
};