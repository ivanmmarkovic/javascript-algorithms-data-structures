
function binarySearch(nums, n){

    if(nums.length == 0){
        return false;
    }
    else{
        let index = Math.floor(nums.length / 2);
        if(nums[index] == n){
            return true;
        }
        else{
            if(nums[index] > n){
                return binarySearch(nums.slice(0, index), n);
            }
            else {
                return binarySearch(nums.slice(index + 1), n);
            }
        }
    }
}


testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42];
console.log(binarySearch(testlist, 3));
console.log(binarySearch(testlist, 13));
