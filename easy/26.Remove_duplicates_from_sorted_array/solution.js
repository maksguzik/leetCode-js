var removeDuplicates = function(nums) {
    const noDuplicated = new Set(nums)
    nums.splice(0, nums.length, ...[...noDuplicated])
};