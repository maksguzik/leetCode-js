var reverse = function(x) {
    const intToString = x.toString().split("");
    const revNumber = intToString.reverse();
    const returnValue = parseInt(revNumber.join(""));
    return (returnValue>(2**31)-1) || (returnValue<-(2**31))? 0 : 
                                                       (x<0)? -returnValue : returnValue;
};