
function sequentialSearch(nums, n){

    let stopped = false;
    let found = false;
    let i = 0;
    while(i < nums.length && !found && !stopped){
        if(nums[i] == n){
            found = true;
        }
        else{
            if(nums[i] > n){
                stopped = true;
            }
            else{
                i++;
            }
        }
    }

    return found;
}


testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42];
console.log(sequentialSearch(testlist, 3));
console.log(sequentialSearch(testlist, 13));
