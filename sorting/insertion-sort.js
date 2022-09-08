

function insertionSort(nums){

    for (let i = 1; i < nums.length; i++) {
        let v = nums[i];
        let pointer = i;
        while(pointer > 0 &&  nums[pointer - 1] > v){
            nums[pointer] = nums[pointer - 1];
            pointer--;
        }
        nums[pointer] = v;
    }
    
};

let array = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(array);
insertionSort(array);
console.log(array);
