

/*
* Problem Statement: Leetcode 242
* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
*/

/*
My approach:
    Declare a Map and store sorted str as key and value as Array of that str.
    Iterate through the string array. Check if sorted str exists then insert into Map else create new element in the Map. 
*/ 

function groupAnagrams(strs: string[]): string[][] {
    if(strs.length === 1){
        return [strs];
    }
    const resultMap = new Map<string, string[]>();

    for(let i=0;i<strs.length; i++){
        const curStr = strs[i];
        const curSortedStr = curStr.split('').sort().join('');         
        const mapVal = resultMap.get(curSortedStr);

        if(mapVal){
            mapVal.push(curStr);
        }else{
            resultMap.set(curSortedStr, [curStr]);
        }        
    }

    return Array.from(resultMap.values());
};