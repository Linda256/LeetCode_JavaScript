/*
1013_PairsOfSongDivisibleBy60

In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.

 

Example 1:

Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
*/

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let res=0;
    for(let i=0;i<time.length-1;i++){
        for(let j=i+1;j<time.length;j++){
            let temp=time[i]+time[j];
            if(temp%60===0){
                res++;
            }
        }
    }
    return res;
};

//let time=[30,20,150,100,40];
let time=[60,60,60];
console.log(numPairsDivisibleBy60(time));
