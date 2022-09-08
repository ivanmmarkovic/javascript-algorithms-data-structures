

function shortBubble(nums){
    let swapped = true;
    do {
        swapped = false;
        for (let index = 0; index < array.length - 1; index++) {
            if(nums[index] > nums[index + 1]){
                let v = nums[index + 1];
                nums[index + 1] = nums[index];
                nums[index] = v;
                swapped = true;
            }
        }
    } while (swapped);

};

let array = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(array);
shortBubble(array);
console.log(array);
