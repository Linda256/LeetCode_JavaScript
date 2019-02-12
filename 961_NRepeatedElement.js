 /**961 N-Repeated Element in Size 2N Array
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    //initiate visited = [];
    //loop through A, 
    //  if A[i] not in visited. push it into visited 
    //  else return a[i]
    //return not found
    let visited = [];
    for(let i=0;i<A.length;i++) {
        if(visited.includes(A[i])){
            return A[i];
        }else visited.push(A[i]);
    }
    return "not found"
    
};

let input=[5,1,5,2,5,3,5,4];
console.log(repeatedNTimes(input));