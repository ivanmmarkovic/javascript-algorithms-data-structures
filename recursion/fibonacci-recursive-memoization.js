

let m = new Map();
m.set(1, 0);
m.set(2, 1);

function fibonacci(n){
    if(!m.has(n)){
        let f = fibonacci(n - 1) + fibonacci(n - 2);
        m.set(n, f);
    }
    return m.get(n);

}

for(let i = 1; i <= 5; i++){
    console.log(`Fibonacci ${i} is ${fibonacci(i)}`);
}