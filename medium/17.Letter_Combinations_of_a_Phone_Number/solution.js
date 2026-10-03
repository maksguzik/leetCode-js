var letterCombinations = function(digits) {
    const numbersLetterSet = new Map();
    let resultArr = [];
    numbersLetterSet.set('2',['a','b','c']);
    numbersLetterSet.set('3',['d','e','f']);
    numbersLetterSet.set('4',['g','h','i']);
    numbersLetterSet.set('5',['j','k','l']);
    numbersLetterSet.set('6',['m','n','o']);
    numbersLetterSet.set('7',['p','q','r','s']);
    numbersLetterSet.set('8',['t','u','v']);
    numbersLetterSet.set('9',['w','x','y','z']);
    if(digits.length===1){
        return numbersLetterSet.get(digits[0])
    }else if(digits.length===2){
        for(let i=0;i<numbersLetterSet.get(digits[0]).length;i++){
            for(let j=0;j<numbersLetterSet.get(digits[1]).length;j++){
                resultArr.push(numbersLetterSet.get(digits[0])[i]+numbersLetterSet.get(digits[1])[j])
            }
        }
    }else if(digits.length===3){
        for(let i=0;i<numbersLetterSet.get(digits[0]).length;i++){
            for(let j=0;j<numbersLetterSet.get(digits[1]).length;j++){
                for(let x=0;x<numbersLetterSet.get(digits[2]).length;x++){
                    resultArr.push(numbersLetterSet.get(digits[0])[i]+numbersLetterSet.get(digits[1])[j]+numbersLetterSet.get(digits[2])[x])
                }
                
            }
        }
    }else if(digits.length===4){
        for(let i=0;i<numbersLetterSet.get(digits[0]).length;i++){
            for(let j=0;j<numbersLetterSet.get(digits[1]).length;j++){
                for(let x=0;x<numbersLetterSet.get(digits[2]).length;x++){
                    for(let y=0;y<numbersLetterSet.get(digits[3]).length;y++){
                        resultArr.push(numbersLetterSet.get(digits[0])[i]+numbersLetterSet.get(digits[1])[j]+numbersLetterSet.get(digits[2])[x]+numbersLetterSet.get(digits[3])[y])
                    }
                }
            }
        }
    }
    return resultArr
};