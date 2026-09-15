var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length
    for(let i=start;i<end;i++){
        let mid = Math.trunc((start+end)/2)
        if(nums[mid]>target){
            end = mid
        }else{
            start = mid
        }
        if(nums[i]<target && nums[i+1]>=target){
            return i+1
        }
    }
    if(target>nums[nums.length-1]){
        return nums.length
    }
    return 0
};