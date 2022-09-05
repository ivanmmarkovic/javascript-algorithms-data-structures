

function fibonacci(n){
    if(n <= 1){
        return 0;
    }
    else if(n == 2){
        return 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

}

for(let i = 1; i <= 5; i++){
    console.log(`Fibonacci ${i} is ${fibonacci(i)}`);
}