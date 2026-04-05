function productExceptSelf(nums) {
    let result = new Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }
    console.log(result);
    

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    
    return result;
}

console.log(productExceptSelf([1,2,3,8,5]));