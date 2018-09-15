/*163 Missing Ranges
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
*/

var findMissingRanges = function(nums, lower, upper) {
    let result=[];
    if (nums[0]===lower&&lower===upper) return result;
    if (nums.length===0){
        let rangeStr='';
        if (lower===upper){
          rangeStr +=upper;
        } else {
          rangeStr +=lower+'->'+upper;
        }
        result.push(rangeStr);
        return result;
    }
    if (upper-nums[0]===0) {
        if (upper-lower===1) {
           let rangeStr= lower+'';
           result.push(rangeStr);
           return result;
        }
        else{
            let r=upper-1;
            let rangeStr=lower+'->'+ r;
            result.push(rangeStr);
            return result;
        }

    }
    let len = nums.length;
    let hi = nums[0]-lower;
    if (hi==1) result.push(lower+'');
    if (hi>1){
        let r = nums[0]-1
        let rangeStr= lower+'->'+ r
        result.push(rangeStr);
    }
    for(let i=0; i<len-1;i++){
        if (nums[i+1]-nums[i]===2){
            let n = nums[i]+1+"";
            result.push(n);
        }
        if (nums[i+1]-nums[i]>2){
            let l = nums[i]+1;
            let r = nums[i+1]-1;
            let rangeStr= l+'->'+ r;
            result.push(rangeStr);
        }
    }
    if (upper-nums[len-1]===1) result.push(upper+'');
    if (upper-nums[len-1]>=2){
            let l = nums[len-1]+1;
            let r = upper;
            let rangeStr= l+'->'+ r;
            result.push(rangeStr);
        }
    return result;
};

//method 2
var findMissingRanges = function(nums, lower, upper) {

  let ranges = [];
  nums.unshift(lower);
  nums.push(upper);

  for (let i = 0; i < nums.length-1; i++) {

    let l = nums[i]+1;

    let r = nums[i+1]-1;

    if (i == 0) l--;
    if (i+1 == nums.length-1) r++;


    if (l > r) continue;

    if (l == r) ranges.push(`${l}`);

    else ranges.push(`${l}->${r}`);
  }

  return ranges;
};