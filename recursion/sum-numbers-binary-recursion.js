

function sumNums(nums){

    function helper(start, end){
        if(start > end){
            return 0;
        }
        else{
            let index = start + Math.floor((end - start) / 2);
            return helper(start, index - 1) + nums[index] + helper(index + 1, end);
        }
    }

    return helper(0, nums.length - 1);
}

