
/*
977 Squares Of a Sorted Array

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

//method 1, naive method. use sort
var sortedSquares = function(A) {
    let B =[];
    A.forEach(n=>B.push(n*n));
    B.sort((a,b)=>a-b);
    return B;
    
};



//method 2. 
var sortedSquares2 = function(A) {
    //if(n<0) push to lessThanZero [];
    //else push to notLessZero []; 
    //merge lessThanZero and notLessZero to result[];
    
    let lessThanZero=[], notLessZero=[], result=[];
    A.forEach(n=>{
        if (n<0) lessThanZero.push(n*n);
        else notLessZero.push(n*n);
    })
   
    
    let lLen = lessThanZero.length;
    if(lLen===0) return notLessZero;
    let nLen = notLessZero.length;
    let i=0,j=lLen-1;
    while(i<nLen && j>=0){
        if(lessThanZero[j]<notLessZero[i]){
            result.push(lessThanZero[j]);
            j--;
        }
        else if (lessThanZero[j]===notLessZero[i]){
            result.push(lessThanZero[j]);
            j--;
            result.push(notLessZero[i]);
            i++;
        }
        else {
            result.push(notLessZero[i]);
            i++;
        }
    }
    
    while (j>=0) {
        result.push(lessThanZero[j]);
        j--;
    }
    while (i<nLen){
        result.push(notLessZero[i]);
        i++;
    } 
        
    return result;
    
}

//method 3 two points
var sortedSquares = function(A) { 
    let end=A.length-1;
    let k=A.length-1;
    let start = 0;
    let result=[];
    while(k>=0){
        if (Math.abs(A[start])>Math.abs(A[end])){
            result[k]=A[start]*A[start];
            start++;
        }
        else{
            result[k]=A[end]*A[end];
            end--
        }
        k--;
    }
    return result;
}

