

class Stack {

    constructor(){
        this.stack = []; 
    }

    isEmpty(){
        return this.stack.length == 0;
    }

    size(){
        return this.stack.length;
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.stack[this.stack.length - 1];
    }
}



let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function converter(num, base){
    let s = new Stack();
    while(num > 0){
        s.push(digits[num % base]);
        num = Math.floor(num / base);
    }
    let res = '';
    while(!s.isEmpty()){
        res += s.pop();
    }
    return res;
}

console.log(converter(1453, 16)) // 5AD