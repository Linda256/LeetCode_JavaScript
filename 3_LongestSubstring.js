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

function longestSubstring(s) {
  let maxSub = 0,
    visited = {};
  for (let i = 0, j = 0; i < s.length; i++) {
    if (visited.hasOwnProperty(s[i])) {
      j = Math.max(j, visited[s[i]] + 1);
    }
    visited[s[i]] = i;
    let currMax = i - j + 1;
    maxSub = Math.max(maxSub, currMax);
  }
  return maxSub;
}

var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  let lstr = s[0];
  let map = new Map();
  map.set(s[0], 0);
  let maxStr = lstr;
  for (let i = 1; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
      lstr += s[i];
    } else {
      let index = lstr.indexOf(s[i]);
      for (let i = 0; i < index; i++) {
        map.delete(lstr[i]);
      }
      map.set(s[i], i);
      lstr = lstr.slice(index + 1);
      lstr += s[i];
    }
    maxStr = lstr.length > maxStr.length ? lstr : maxStr;
  }
  return maxStr.length;
};

let s = "abcabcbbefgh";
let result = longestSubstring(s);
console.log(result);
