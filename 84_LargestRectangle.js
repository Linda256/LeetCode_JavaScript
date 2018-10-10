/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

*/
/***** Method 1: O(n*n) naive method********/
/*
caculate the maxium area for each item(rectangle spread to left if the item on the left greater than current item, spread to right if the item on the right greater than current item)
*/
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

/***** Method 2: O(n) ********/
//initiate maxArea=0; currArea=0
//loop througth A
//  if s is empty or A[i]>=s[s.length-1]
//      put the index i into stack s
//  else while (A[i]<A[s[s.length-1]])
      //      pop index from s as k
      //      width of rectangle is the difference between i and the last item in stack s (s[s.length-1])-1
      //      currArea= A[k]*w
      //      maxArea is the bigger of currArea and maxArea
//return maxArea
var largestRectangleArea2 = function(A) {

  if(A.length===0) return 0;
  let maxArea=A[0],currArea=A[0],s=[];
  for(let i=0;i<=A.length;i++){
    let curr=(i===A.length) ? -1 : A[i];
    while (s.length !==0 && curr<A[s[s.length-1]]){
        let k=s.pop();
        let w=(s.length===0 ? i : i-s[s.length-1]-1);
        currArea= A[k]*w
        maxArea=Math.max(currArea,maxArea);
        }
    s.push(i);
  }
  return maxArea;
}
//let arr = [2,1,5,6,2,3];
let arr=[1,1];
//let arr=[0,9];
//
//let arr=[2,1,2];
//let arr=[2,3,4,5,3,3,2]
console.log('method1', largestRectangleArea(arr));
console.log('method2', largestRectangleArea2(arr));