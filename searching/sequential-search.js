
function sequentialSearch(nums, n){

    let found = false;
    let i = 0;
    while(i < nums.length && !found){
        if(nums[i] == n){
            found = true;
        }
        else{
            i++;
        }
    }

    return found;
}


testlist = [1, 2, 32, 8, 17, 19, 42, 13, 0];
console.log(sequentialSearch(testlist, 3));
console.log(sequentialSearch(testlist, 13));
