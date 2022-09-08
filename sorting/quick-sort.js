

function quickSort(nums, left, right){

    if(left >= right){
        return;
    }
    let i = left;
    let j = right;
    let p = i;

    let pivotIndex = i + Math.floor((j - i) / 2);
    let pivotValue = nums[pivotIndex];
    
    while(p <= j){
        if(nums[p] < pivotValue){
            let v = nums[i];
            nums[i] = nums[p];
            nums[p] = v;
            i++;
            p++;
        }
        else if(nums[p] > pivotValue){
            let v = nums[j];
            nums[j] = nums[p];
            nums[p] = v;
            j--;
        }
        else{
            p++;
        }
    }

    quickSort(nums, left, i);
    quickSort(nums, i + 1, right);
    
};

let array = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(array);
quickSort(array, 0, array.length - 1);
console.log(array);
