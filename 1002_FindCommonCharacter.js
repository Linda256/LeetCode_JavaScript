/*
1002 Find Common Characters
*/
var commonChars = function(A) {

  let res=[];
  if(A.length===0)return res;
  let objArr=[];
  for(let i=0;i<A.length;i++){
    let obj=convertObj(A[i]);
    objArr.push(obj);
  }
  let temp=Object.assign({},objArr[0]);
  let charArr =  Object.keys(objArr[0]);
  let i=0;
  while(i<charArr.length){
    let j=1;
    while(j<objArr.length){
      if(!objArr[j].hasOwnProperty(charArr[i])){
        temp[charArr[i]]=0;
        break;
      }else{
        temp[charArr[i]]=Math.min(temp[charArr[i]],objArr[j][charArr[i]]);
      }
      j++;
    }
    i++;
  }
  for(let k in temp){
    let n=temp[k];
    while(n>0){
      res.push(k);
      n--;
    }
  }
  return res;
}

function convertObj(str){
  let obj={};
  for(let i=0;i<str.length;i++){
    if(obj.hasOwnProperty(str[i])){
      obj[str[i]]=obj[str[i]]+1;
    }else{
      obj[str[i]]=1;
    }
  }
  return obj;
}

//let input=["bella","label","roller"];
//let input=["cool","lock","cook"];
let input=['cool'];
console.log(commonChars(input));
