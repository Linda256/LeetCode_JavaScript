var longestPalindrome = function(s) {
    var lo=0;
    var maxlen=0;
    if (s.length===0 || s.length===1) return s;

    for (let i=0; i< s.length-1; i++){
        extendPalindrome(s,i,i);
        extendPalindrome(s,i,i+1);
    }

    function extendPalindrome(s,j,k){
        while(j>=0 && k<s.length && s[j]===s[k]){
            j--;
            k++;
        }
        if (maxlen<k-j-1){
           lo=j+1;
           maxlen= k-j-1;
        }
    };
    return s.substring(lo,maxlen+lo);
}