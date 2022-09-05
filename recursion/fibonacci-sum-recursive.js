

function fibonacciSum(n){
    
    function helper(n, prev = 0, curr = 1, acc = 0){
        if(n == 1){
            return prev;
        }
        else if(n == 2){
            return acc + curr;
        }
        else{
            return helper(n - 1, curr, curr + prev, acc + curr);
        }
    }

    return helper(n);

}

for(let i = 1; i <= 5; i++){
    console.log(`Fibonacci ${i} is ${fibonacciSum(i)}`);
}