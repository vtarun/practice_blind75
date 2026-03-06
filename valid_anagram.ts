
/*
* Problem Statement: Leetcode 242
* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

/*
My approach:

*/

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();
    for(let i = 0; i<t.length; i++){
        if(sMap.has(s.charAt(i))){
            sMap.set(s.charAt(i), sMap.get(s.charAt(i)) + 1);
        }else{
            sMap.set(s.charAt(i), 1);
        }
        if(tMap.has(t.charAt(i))){
            tMap.set(t.charAt(i), tMap.get(t.charAt(i)) + 1);
        }else{
            tMap.set(t.charAt(i), 1);
        }                
    }

    for(const [key, value] of sMap){
        if(!tMap.has(key) || tMap.get(key) !== value){
            return false;
        }
    }

    return true;
};