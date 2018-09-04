/**
 * @param {number[]} seats
 * @return {number}
 */
/*
E:0s at the end of array
*/
var maxDistToClosest = function(seats) {
    // maxDist=0
    //loop through the arr
    // count curr concessive 0s as zeros
    //  if 0s between 1s
    //      if zeros is odd number currDist = zeros/2+1
    //      else currDist = zeros/2
    // else currDist = zeros (0 at beginning and end)
    // if currDist>maxDist maxDist=currDist
    // return maxDist
    let maxDist = 0;
    if (seats.indexOf(1)!==0) {
        maxDist=seats.indexOf(1)
    }
    let currInd = maxDist+1;
    while (currInd<seats.length){
        if (seats.indexOf(1,currInd)===-1 && currInd<seats.length) {
            currDist=seats.length-currInd;
            if (currDist>maxDist) return maxDist=currDist;
            break;
        }
        else{
            let currOne = seats.indexOf(1,currInd);
            let zeroes = currOne-currInd;
            currInd=currOne+1;
            if (zeroes%2===0) currDist=zeroes/2;
            else currDist=Math.ceil(zeroes/2)
        }
        if (currDist>maxDist) maxDist=currDist;
    }
    return maxDist;
};