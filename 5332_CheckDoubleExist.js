let binarySearch=(x,arr,i)=>{
    let max=arr.length;
    let min=i+1;
    
    while(min<=max){
        let mid = Math.floor((max+min)/2);
        //console.log("mid", mid)
        if(arr[mid]===x){
            return mid;
        }else if(arr[mid]>x){
            max=mid-1
        }else{
            min=mid+1         
        }
    }
    return -1;
}

let checkIfExist = function(arr) {
    //sort arr
    arr.sort((a,b)=>a-b);
    //start from i+1, binary search for find arr[i]*2, if 
    for(let i=0;i<arr.length;i++){
        //let target= arr[i]===0 ? 0 : arr[i]*2;
        let target = arr[i]>0 ? arr[i]*2 : arr[i]/2;
        let index =binarySearch(target, arr,i);
        if(index>-1){
            console.log(arr[i], index)
            return true;
        }
    }
    return false
    
};

//let arr = [2,3,5,10];
//let arr =[7,1,14,11]
//let arr = [-2,0,10,-19,4,6,-8]
let arr =[-10,12,-20,-8,15]
//let arr=[0,0]
//const res = binarySearch(3,arr);
//console.log("res",res)
console.log("double", checkIfExist(arr));
