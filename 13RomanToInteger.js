/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number = 0;
    const arrRoman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const arrNumber = [1000, 500, 100, 50, 10, 5, 1];
    let arrS = s.split('');
    lastNumber = 0;
    
    for(let i=0; i<arrS.length; i++){
        for(let j=0; j<arrRoman.length; j++){
            if(arrS[i] === arrRoman[j]){
               lastNumber<arrNumber[j] ? 
                    number += (arrNumber[j] -(lastNumber*2)) :
                    number += arrNumber[j];
                lastNumber=arrNumber[j];
            }
        }
    }
    
    
    return number;
};