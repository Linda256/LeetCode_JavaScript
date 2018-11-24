/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
     //visitedOne [];
    //count++
    //previousIndOfOne=-1;
    //for(let i=0;i<A.length;i++)
    //  if A[i] = 1 push i into visitedOne
    //  if (visitedOne.length=S) count++; i++
    //  while (visitedOne.length=S && i<A.length){
    //
    //      if A[i]===0{
    //          count++;
    //          i++;
    //      }
    //      if A[i]===1{
    //          let firstIndex = visitedOne.shift();
    //          let leftZero = (firstIndex-previousIndOfOne)-1;
    //          let rightZero = (visitedOne[0] - firstIndex) -1;
    //          count = count + leftZero + RightZero ;
    //          previousIndOfOne=firstIndex;
    //          visitedOne.push(i);
    //      }
    //
    //   }
    // return count;
//naive method.
//Time Complexity O(n*n)
//Space Complexity O(n*n)
var numSubarraysWithSum1 = function(A, S){
    let result=0;
    for (let i=0;i<A.length;i++){
        let count=A[i];
        if (count === S) result++;
        for(let j=i+1;j<A.length;j++){
            count=count+A[j];
            if (count === S) {
                result++;
            }
        }
    }
    return result;
}
var numSubarraysWithSum = function(A, S) {
    let visitedOne=[],count=0,previousIndOfOne=-1;
    for(let i=0;i<A.length;i++){

        if (A[i] === 1) visitedOne.push(i);
        if (visitedOne.length===S){
           count++;
           i++ ;
        }
        while (visitedOne.length===S && i<A.length){

             if (A[i]===0){
                 count++;
                 i++;
             }
             if (A[i]===1){
                 count++;
                 let firstIndex = visitedOne.shift();
                 let leftZero = (firstIndex-previousIndOfOne)-1;
                 count +=leftZero;
                 if(visitedOne[0]) {
                    let rightZero = (visitedOne[0] - firstIndex) -1;
                    count+=rightZero ;
                }

                 previousIndOfOne=firstIndex;
                 visitedOne.push(i);
                 i++;
             }
         }

    }
    return count;
};

//let input = [0,0,0,0,0], s=0;
//let input =[1,1,1,1,1], s=1;
let input = [1,0,1,0,1], s=0

let result = numSubarraysWithSum1(input,s);
console.log(result);