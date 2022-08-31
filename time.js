

const sumNums = (n) => {

    let start = new Date();

    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }

    let end = new Date();
    console.log(end.getTime() - start.getTime());

    return sum;
};


const sumNumsFaster = (n) => {

    let start = new Date();

    let sum = 0;

    sum = n * (n + 1) / 2;

    let end = new Date();
    console.log(end.getTime() - start.getTime());


    return sum;
};


sumNums(100000);
sumNumsFaster(100000);

console.log('-----------------------------------------------------');

sumNums(1000000);
sumNumsFaster(1000000);

console.log('-----------------------------------------------------');

sumNums(10000000);
sumNumsFaster(10000000);
