
/*
* Problem Statement: Leetcode 242
* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

/*
My approach:
    Declare two Map and store character and increament corresponsding occurance.
    Then iterate through the Map and check if both map count is equal. 
*/

// First attemp.
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


// Second attemp
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();
    for(let i = 0; i<t.length; i++){
        const sChar = s.charAt(i);
        const tChar = t.charAt(i);

        sMap.set(sChar, (sMap.get(sChar) || 0) + 1);                
        tMap.set(tChar, (tMap.get(tChar) || 0) + 1);
                       
    }

    for(const [key, value] of sMap){
        if(!tMap.has(key) || tMap.get(key) !== value){
            return false;
        }
    }

    return true;
};

//Final attemp with help
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    const countMap = new Map<string, number>();

    for(let i = 0; i<t.length; i++){
        const sChar = s.charAt(i);
        const tChar = t.charAt(i);

        countMap.set(sChar, (countMap.get(sChar) || 0) + 1);                
        countMap.set(tChar, (countMap.get(tChar) || 0) - 1);
                       
    }

    for(const [key, value] of countMap){
        if( value !== 0){
            return false;
        }
    }

    return true;
};