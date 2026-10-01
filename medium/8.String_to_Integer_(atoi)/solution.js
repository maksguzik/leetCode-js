var myAtoi = function(s) {
    let negativeCheck = false
    let workS = s.trim()
    const integer = ['0','1','2','3','4','5','6','7','8','9']
    let resultString = ""
    let resultInteger = 0
    if(workS[0]==="-"){
        negativeCheck = true
        workS = workS.slice(1)
    }else if(workS[0]==="+"){
        workS = workS.slice(1)
    }
    for(let i=0;i<workS.length;i++){
        if(workS[i]==="0"){
            workS = workS.slice(1)
            i--
        }else{
            break 
        }
    }
    for(let i=0;i<workS.length;i++){
        if(!integer.includes(workS[i])){
            break
        }
        resultString+=workS[i]
    }
    for(let i=0;i<resultString.length;i++){
        resultInteger+=resultString[i]*(10**(resultString.length-i-1))
    }
    resultInteger = (negativeCheck)? -resultInteger : resultInteger
    if(resultInteger>2**31-1){
        return 2**31-1
    }else if(resultInteger<-(2**31)){
        return -(2**31)
    }
    return resultInteger
};