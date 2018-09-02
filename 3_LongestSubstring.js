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
/*
if s = '' return 0
let visited={}
let j=0;
let biggest = 0;
loop through s
  if visited contains s[i]
    j=Math.max(j,i+1);
  visited[s[i]] = i;
  biggest = Math.max(biggest, i-j+1)
return biggest;


*/
function longestSubstring(s){
  if (s.length===0) return 0;
  let visited={}
  let j=0;
  let biggest = 0;
  for (let i=0; i<s.length; i++){
    if (visited.hasOwnProperty(s[i])){
      j=Math.max(j,visited[s[i]]+1);
    }
    visited[s[i]] = i;
    biggest = Math.max(biggest, i-j+1)
  }
  return biggest;
}

let s="abcabcbbefgh";
let result = longestSubstring(s);
console.log(result);