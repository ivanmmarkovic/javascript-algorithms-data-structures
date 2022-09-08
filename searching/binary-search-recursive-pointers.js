
function binarySearch(nums, n){

    function helper(start, end){
        if(start > end){
            return false;
        }
        else {
            let index = start + Math.floor((end - start) / 2);
            if(nums[index] == n){
                return true;
            }
            else{
                if(nums[index] > n){
                    return helper(start, index - 1);
                }
                else {
                    return helper(index + 1, end);
                }
            }

        }
    }

    return helper(0, nums.length - 1);

}


testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42];
console.log(binarySearch(testlist, 3));
console.log(binarySearch(testlist, 13));
