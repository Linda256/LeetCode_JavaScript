/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.



Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"


Note:

S.length <= 100
33 <= S[i].ASCIIcode <= 122
S doesn't contain \ or "
*/

var reverseOnlyLetters = function(S) {
  let arr=S.split('');
    //loop through arr, if letter swap passition
  let j=arr.length-1;
  let i=0;
  while(i<j){
      if (arr[i].match(/[a-z]/gi)){
        //console.log('arr[j] ',arr[j]);
        while(j>i && !arr[j].match(/[a-z]/gi)){
          j--;
        }
        swap(arr,i,j);
        j--;
      }
      i++;

  }
  S=arr.join('');
  return S;
};

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

//let str="Test1ng-Leet=code-Q!";
let str="a-bC-dEf-ghIj"
console.log(str);
console.log(reverseOnlyLetters(str));
//reverseOnlyLetters("Test1ng-Leet=code-Q!")