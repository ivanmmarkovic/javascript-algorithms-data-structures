

let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function converter(num, base){
    if(num < base){
        return digits[num % base];
    }
    else {
        return converter(Math.floor(num / base), base) + digits[num % base];
    }
}

console.log(converter(1453, 16)) // 5AD