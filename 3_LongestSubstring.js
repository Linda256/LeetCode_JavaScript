/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", which the length is 3.
*/

/*
I:String
O:number
C: O(n)
E:""
*/

//initiate maxSub=0, object visited to store letter as key and position as value
    //loop through s (two pointer, i,j)
        //if s[i] is in visited
            // move j forward to 1 position after s[i] previous position if the position is greater than j current position
        //update s[i] position if it in visited or put s[i] to visited if not
        //calculate currMax = i-j+1
        // update maxSub if currMax>maxSub
//return maxSub;

function longestSubstring(s){
  let maxSub=0, visited={};
    for (let i=0,j=0;i<s.length;i++){
        if (visited.hasOwnProperty(s[i])){
            j = Math.max(j,visited[s[i]]+1);
        }
        visited[s[i]]=i;
        let currMax = i-j+1;
        maxSub=Math.max(maxSub,currMax);
    }
    return maxSub;
}

let s="abcabcbbefgh";
let result = longestSubstring(s);
console.log(result);