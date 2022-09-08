

function mergeSort(nums){

    if(nums.length < 2){
        return;
    }
    let index = Math.floor(nums.length / 2);
    let left = nums.slice(0, index);
    let right = nums.slice(index);
    mergeSort(left);
    mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            nums[k] = left[i];
            i++;
        }
        else{
            nums[k] = right[j];
            j++;
        }
        k++;
    }
    while(i < left.length){
        nums[k] = left[i];
        i++;
        k++;
    }
    while(j < right.length){
        nums[k] = right[j];
        j++;
        k++;
    }
};

let array = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(array);
mergeSort(array);
console.log(array);
