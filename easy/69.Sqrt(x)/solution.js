var mySqrt = function(x) {
    for(let i=0; i<=Math.trunc(x/2);i++){
      if(((i+1)*(i+1)>x) &&(i*i<=x)){
            return i
        }
    }
    return 1
};