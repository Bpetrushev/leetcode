/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let count = 0;
    let prefix = strs[0];
    if(strs.length === 0 || prefix === "") 
    {return '';} 
    else if(strs.length === 1) {return strs[0];}
    
    let i;
    for(i=1; i<=strs[0].length; i++){
        for(let j=0; j<strs.length; j++){
            if(prefix.slice(0,i) !== strs[j].slice(0,i)){
                return prefix.slice(0,i-1);   
            }
        }
    }
    return prefix.slice(0,i);
};