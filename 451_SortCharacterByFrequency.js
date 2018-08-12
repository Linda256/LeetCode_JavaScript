/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    //loop through the string
    //  put the char as the key and the frequency as the value into object freq
    // sort the keys of the freq in descending order put the result into sorted
    // repeat the char in sorted based its value in freq.

    //return result
    let freq = {};
    let result = '';
    for (let i=0; i<s.length; i++){
        if (freq[s[i]] === undefined){
            freq[s[i]] = 1;
        } else {
            freq[s[i]]++ ;
        }
    }

    var sorted = Object.keys(freq).sort(function(a,b){return freq[b] - freq[a]});

    sorted.forEach((char) => {
        for(let i=0; i<freq[char];i++){
            result=result+char;
        }
    })

    return result;

};