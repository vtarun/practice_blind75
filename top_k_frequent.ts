
/*
* Problem Statement: Leetcode 347
* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

/*
My approach:
    Declare a Map and store number and corresponsding occurances.
    Then sort the Map and slice till k to get frequent elements. 
*/

function topKFrequent(nums: number[], k: number): number[] {
    const countMap = new Map<number, number>();
     for(const num of nums){
        countMap.set(num, (countMap.get(num) ?? 0) + 1);        
     }

     const sorted = [...countMap.entries()].sort((a, b) => (b[1] - a[1]));
     return sorted.slice(0, k).map(([key, val]) => key);
};