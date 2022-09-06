

function sumNums(nums){

    function helper(end){
        if(end < 0){
            return 0;
        }
        else{
            return nums[end] + helper(end--);
        }
    }

    return helper(nums.length - 1);
}