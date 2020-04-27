/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let pc = 0; let c = 0;
    let arr = [];
    for(let i=0; i<s.length; i++){
        if(!arr.includes(s[i])){
           arr.push(s[i]);
            c = arr.length;
        } else {
            pc < c ? pc = c : pc = pc;
            c = 0;
            const indexArr = arr.indexOf(s[i]);
            for(let j=0; j<=indexArr; j++){
                arr.shift();
            }
            arr.push(s[i]);
        }
    }
    return pc < c ? c : pc;
    
};