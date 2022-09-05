

function fibonacci(n){
    if(n <= 1){
        return 0;
    }
    if(n == 2){
        return 1;
    }

    let prev = 0, curr = 1;
    for(let i = 0; i < n - 2; i++){
        let p = prev;
        prev = curr;
        curr = p + curr;
    }

    return curr;
}

for(let i = 1; i <= 5; i++){
    console.log(`Fibonacci ${i} is ${fibonacci(i)}`);
}