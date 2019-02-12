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

/*2nd non-repeat character*/

const secondNonRepeat=function(str,k){
    let visited={};
    let nonRepeat=0;
    for(let i=0;i<str.length;i++){
        visited[str[i]]===undefined?visited[str[i]]=1:visited[str[i]]+=1;
    }

    for(let i=0;i<str.length;i++){
        if(visited[str[i]]===1&&nonRepeat<k){
            nonRepeat++;
        }
        else if(visited[str[i]]===1&&nonRepeat===k){
            return str[i];
        }
    }
    return -1;
}

let str = "AmericanExpress";
let k=1;
let res=secondNonRepeat(str,k);
console.log('nonRepeat',res);