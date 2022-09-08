

function selectionSort(nums){

    for (let i = 0; i < nums.length; i++) {
        let index = i;
        for (let j = i + 1; j < array.length; j++) {
            if(nums[j] < nums[index]){
                index = j;
            }
        }

        if(index != i){
            let v = nums[index];
            nums[index] = nums[i];
            nums[i] = v;
        }
    }
    
};

let array = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(array);
selectionSort(array);
console.log(array);
