/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

*/
//Method 1 naive method: caculate the maxium area for each item(rectangle spread to left if the item on the left greater than current item, spread to right if the item on the right greater than current item)
var largestRectangleArea = function(A) {
    if(A.length===0) return 0;
    let maxArea=A[0],currArea=A[0];
    for(let i=0;i<A.length;i++){
      let w=0,j=i;k=i-1;
      while(A[j]>=A[i] && j<A.length){
        w++;
        j++;
      }
       while(A[k]>=A[i] && k>=0){
        w++;
        k--;
      }
      let currArea=A[i]*w;
      maxArea=Math.max(maxArea,currArea);
    }
    return maxArea;
};

//let arr = [2,1,5,6,2,3];
//let arr=[1,1];
//let arr=[0,9];
let arr=[2,1,2]
console.log(largestRectangleArea(arr));