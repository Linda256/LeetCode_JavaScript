/*
989 Add to Array-Form of Integer
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */


var addToArrayForm = function(A, K) {
    let KArr=K.toString().split("").map(str=>Number(str));
    if(A.length<KArr.length){
        let temp=KArr;
        KArr=A;
        A=temp;
    }

    let n=KArr.length-1;
    let adjust=0;
    let k=A.length-1;
    let total=1;
        
    while(k>=0 && (total>0||adjust>0||n>=0)){
        if(n>=0){
            total=A[k]+ KArr[n]+adjust;
        }else{
            total=A[k]+adjust;
        }
        adjust=0;
        n--;
        if(total>=10){
            adjust=1;
            total=total-10;   
        }
        if (total>=0) A[k]=total;
        console.log(A[k]);
        k--;
    }
    if (adjust===1) A.unshift(1);
    return A;

}

let A=[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];
let K=516;

//Naive method, has the problem with overflow.
var addToArrayForm2 = function(A, K) {
    let val=getVal(A);
    console.log('val',val);
    let total=val+K;
    console.log("total",total);
    let strArr=total.toString().split("");
    let res=strArr.map(str=>Number(str));
    return res;   
};

function getVal(A){
    let len=A.length;
    let val=0; 
    for (let i=0;i<A.length;i++){
        let tenth=1;
        for(let k=0;k<len-1;k++){
            tenth=10*tenth;
        }   
        val=val+A[i]*tenth;
        len--;
    }
    return val;
    
}
// let A=[9,9,9,9,9,9,9,9,9,9];
// let K=1;
// let A=[1];
// let K=33;

console.log(addToArrayForm(A,K));