

function reverseArray(arr){


    function helper(start, end){
        if(start < end){
            let tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            helper(start + 1, end - 1);
        }
    }

    helper(0, arr.length - 1);

};

