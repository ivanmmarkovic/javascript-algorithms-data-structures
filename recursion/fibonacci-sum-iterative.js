

function fibonacciSum(n){
    
    if(n == 1){
        return 0;
    }
    else if(n == 2){
        return 1;
    }

    let sum = 0;
    let prev = 0, curr = 1;
    for(let i = 0; i < n - 2; i++){
        sum += curr;
        let p = prev;
        prev = curr;
        curr = curr + prev;
    }

    return sum;

}

for(let i = 1; i <= 5; i++){
    console.log(`Fibonacci ${i} is ${fibonacciSum(i)}`);
}