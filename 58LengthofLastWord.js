/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(' ').filter(x => x!=="");
    return arr.length === 0 ? 0 : arr[arr.length-1].length;    
};
