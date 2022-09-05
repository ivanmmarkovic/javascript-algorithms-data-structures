

function fibonacci(n){
    
    function helper(n, prev = 0, curr = 1){
        if(n == 1){
            return prev;
        }
        else if(n == 2){
            return curr;
        }
        else{
            return helper(n - 1, curr, curr + prev);
        }
    }

    return helper(n);

}

for(let i = 1; i <= 5; i++){
    console.log(`Fibonacci ${i} is ${fibonacci(i)}`);
}