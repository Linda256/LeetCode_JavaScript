// let minSteps = function(s, t) {
//     //edge case: space 

//     s.split('').sort((a,b)=>a-b);
//     t.split('').sort((a,b)=>a-b);
//     if(s===t){
//         return 0;
//     } 
//     let count=0
//     for(let i=0;i<s.length;i++){
//         if(s[i]!==t[i]){
//             count++;
//         }
//     }
//     return count;

// };

let minSteps = function(s, t) {
    let count=0
    //make sLetters object to count letters in s
    //make tLetters object to count letters in t
    //for each k in sLetters get the value in tLetters
        // if not found, count=count+sLetter[k]
        // else if(sLetter[k]-tLetter[k]>0)
                //count=sLetter[k]-tLetter[k]
    let sLetters ={};
    let tLetters = {};
    for(let i=0;i<s.length;i++){
        if(sLetters[s[i]]===undefined){
            sLetters[s[i]]=1
        }else{
            sLetters[s[i]]=sLetters[s[i]]+1
        }
    }
    for(let i=0;i<t.length;i++){
        if(tLetters[t[i]]===undefined){
            tLetters[t[i]]=1
        }else{
            tLetters[t[i]]=tLetters[t[i]]+1
        }
    }

    console.log("sLetters",sLetters);
    console.log("tLetter", tLetters);
    let keysArr= Object.keys(sLetters);
    for(let i=0;i<keysArr.length;i++){
        let letter=keysArr[i];
        if(tLetters[letter]===undefined){
            count=count+sLetters[letter];
        }else{
            if(sLetters[letter]-tLetters[letter]>0){
                count=count + (sLetters[letter]-tLetters[letter])
            }
        }
    }
    return count;
}

// let s = "friend";
// let t = "family";
//let s="leetcode";
//let t="practice"
let s="anagram";
let t="mangaar"

console.log(minSteps(s,t));