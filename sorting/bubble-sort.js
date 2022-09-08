

function bubbleSort(nums){
    for (let i = 0; i < nums.length; i++) {
        for(let j = nums.length - 1; j > i; j--){
            if(nums[j - 1] > nums[j]){
                let v = nums[j - 1];
                nums[j - 1] = nums[j];
                nums[j] = v;
            }
        }
    }
};

let array = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(array);
bubbleSort(array);
console.log(array);
