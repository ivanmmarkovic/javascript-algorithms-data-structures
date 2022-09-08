
function binarySearch(nums, n){

    let found = false;
    let start = 0, end = nums.length - 1;
    while(start <= end && !found){
        let index = start + Math.floor((end - start) / 2);
        if(nums[index] == n){
            found = true;
        }
        else{
            if(nums[index] > n){
                end = index - 1;                
            }
            else {
                start = index + 1;
            }
        }

    }

    return found;

}


testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42];
console.log(binarySearch(testlist, 3));
console.log(binarySearch(testlist, 13));
