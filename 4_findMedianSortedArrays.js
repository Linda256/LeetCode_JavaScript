var findMedianSortedArrays = function(nums1, nums2) {
    //merge nums1 and nums2 into nums
    // if the length of num is odd number index of the median is Math.floor(num.length/2)
    //        else median  (num[num.length/2] +num[num.length/2-1])/2
    let nums = [];
    let i=0;
    let j=0;
    let k=0;
    while(i<nums1.length || j<nums2.length && k<nums1.length+ nums2.length){
        if (nums1[i]<=nums2[j]){
            nums[k]=nums1[i];
            i++;
            k++;
        }
        else if (nums1[i]>nums2[j]){
            nums[k]=nums2[j];
            j++;
            k++;
        }
        else if (i===nums1.length){
            nums[k]=nums2[j];
            j++;
            k++;
        }
        else {
            nums[k]=nums1[i];
            i++;
            k++;
        }
    }

    median=findMedian(nums);
    return median;

};

var findMedian = function(nums){
    let median;
    let mid = Math.floor(nums.length/2)
    if (nums.length%2===0){
        median=(nums[mid] +nums[mid-1])/2
    } else median=nums[mid];
    return median
}