/*937 Reorder Log Files
You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.



Example 1:

Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
*/

var reorderLogFiles = function(logs) {
    //initiate two arrays, digits [], letters[]
    //loop through logs
        //for each log, put digit into digits, letter into letters
    //sort letters based on item after delimitor
    //combine digits and letters array together
    let digits=[], letters=[]
    logs.forEach(log=>{
       //
       let start = log.indexOf(' ');
        if (isNaN(log[start+1]) == false){
            digits.push(log);
        } else letters.push(log);
    })
    let sortedLetters = sortArray(letters);
    sortedLetters.push(...digits);
    return sortedLetters;
};

function sortArray(arr){
  let newArr=[];
  arr.forEach(log => {
    newArr.push(log.split(" "));
  });
  //console.log(newArr);

  newArr.sort((a,b)=>{
    let i=1,j=1;
    while(i<a.length && j<b.length){
      if (a[i]> b[j]) return 1;
      else if (a[i]< b[j])return -1
      else{
        i++;
        j++;
      }
    }
    if (a[0]>=b[0]) return 1
    return -1;
  })
  arr=[];
  newArr.forEach(log => {
    arr.push(log.join(" "));
  });
  return arr;
}

let logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"];
let result=reorderLogFiles(logs);
console.log(result);



// digtis [ 'a1 9 2 3 1', 'zo4 4 7' ]
//let letters=[ 'g1 act car', 'ab1 off key dog', 'a8 act zoo' ]
//console.log(sortArray(letters));
