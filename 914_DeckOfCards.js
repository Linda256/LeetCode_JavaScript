/*
914. X of a Kind in a Deck of Cards
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.


Example 1:

Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
Example 2:

Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
Example 3:

Input: [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: [1,1]
Output: true
Explanation: Possible partition [1,1]
Example 5:

Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]

Note:

1 <= deck.length <= 10000
0 <= deck[i] < 10000
*/
var hasGroupsSizeX = function(deck) {
     //if deck.length<2 return false;
    //initiate an object obj
    //loop through deck
        //if deck[i] is a key of obj, value++
        // else add obj[deck[i]]=1
    //sort the values of deck, find the minimum value  minVal of values
    // put each factor of  minVal into array div
    // loop through factors in div, if all the values can be divided by a factor, return true
    //return false;

    if (deck.length<2) return false;
    let obj={};

    for (let i=0;i<deck.length;i++){
        if (obj.hasOwnProperty(deck[i]))  obj[deck[i]]++;
        else obj[deck[i]]=1
    }

    console.log(obj);

    let vals=Object.values(obj);
    vals.sort((a,b)=>a-b);
    let minCount=vals[0];
    if (minCount===1) return false;
    console.log(minCount)
    let div=minDiv(minCount);
    console.log('div',div);
    for (let i=0;i<div.length;i++){
        let d=div[i];
        let j=0;
        while(j<vals.length){
            if (vals[j]%d!==0 ) break;
            else j++
        }
        if (j===vals.length) return true;
    }
    return false;
};

var minDiv=function(n){
    let div=[];
    for (let i=2;i<=n;i++){
        if (n%i===0) {
          div.push(i);
        }
    }
    console.log('divFunc',div)
    return div;
}

let arr=[1,1,1,2,2,2,3,3];
let result=hasGroupsSizeX(arr);
console.log(result);