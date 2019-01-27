/*
984_StringWithoutAAA
*/
var strWithout3a3b = function(A, B) {
    let result="";
    let long='a', short='b',longNum=A,shortNum=B;
    if(A<B){
        long='b';
        short='a';
        longNum=B;
        shortNum=A;
    } 
    if ((longNum/shortNum-3)>1) return "";
    
    let countLong=0, countShort=0;
    while(countLong<longNum){
        if(longNum-countLong>=2){
            result+=long+long;
            console.log("before add 2: ",countLong); 
            countLong +=2;
            console.log("after add 2: ", countLong); 
            if(shortNum>countShort){
                result+=short;
                countShort+=1; 
            }  
        }
        else{
            result=result+long;
            console.log("else", countLong);
            countLong+=1; 
            if(shortNum>countShort){
                result+=short;
                countShort+=1; 
            }  
        }
         
    }
    return result;
    
};

var strWithout3a3b = function(A, B) {
    let res="";
    while(A>B && A>0 && B>0){
        if(A>=2) {
            res+="aa";
            A=A-2;
        }
        if(B>=1){
            res+="b";
            B=B-1;
        }
    }
    while(B>A && A>0 && B>0){
        if(B>=2) {
            res+="bb";
            B=B-2;
        }
        if(A>=1){
            res+="a";
            A=A-1;
        }
    }
    while(A>0 || B>0){
        if(A>=1){
            res+="a";
            A=A-1;
        };
         if(B>=1){
            res+="b";
            B=B-1;
        }

    }
    return res;
}
let A=4,B=1;
let res=strWithout3a3b(A,B);
console.log(res);