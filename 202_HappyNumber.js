/*
202 Happy Number
*/
/**
 * @param {number} n
 * @return {boolean}
 */
/*
visited=[n];
while(n!==1)
    nArr=n.split('');
    total=0
    nArr.map(s=>{
        total+=Math.pow(Number(s),2);
    })
    n=total;
    if n is in visited return false
    visited.push(n)
return true;
*/
var isHappy = function(n) {
    let visited=[n];
    while(n!==1){
        let nArr=n.toString().split('');
        let total=0
        nArr.forEach(s=>{
            total+=Math.pow(Number(s),2);
        })
        n=total;
        if(visited.includes(n)) return false
        visited.push(n)
    }

    return true;

};

var isHappy2 = function(n) {
    let visited= [n];
    while(n!==1){
        let total=0;
        while(n>0){
          let currNum = n%10;
          total +=Math.pow(currNum,2);
          n=Math.floor(n/10);
        }
        n=total;
        console.log(n);
        console.log(visited);
        if (visited.includes(n)) return false;
        visited.push(n);
    }
    return true;

};

var isHappy3 = function(n) {
    let visited= new Set();
    visited.add(n);
    while(n!==1){
        let total=0;
        while(n>0){
          let currNum = n%10;
          total +=Math.pow(currNum,2);
          n=Math.floor(n/10);
        }
        n=total;
        if(visited.has(n)) return false;
        console.log(n);
        console.log(visited);

        visited.add(n);
    }
    return true;

};

//let n=19;
let n=2;
let res=isHappy3(n);
console.log(res);