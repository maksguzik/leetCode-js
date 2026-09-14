var lengthOfLastWord = function(s) {
    const reverseTrimSentence = s.trim()
    for(let i=0;i<reverseTrimSentence.length;i++){
        if(reverseTrimSentence[reverseTrimSentence.length-1-i]===" "){
            return i
        }
        if(i===(reverseTrimSentence.length-1)){
            return i+1
        }
    }
    return 0
};