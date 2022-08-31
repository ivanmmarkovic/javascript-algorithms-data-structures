class Queue {

    constructor(){
        this.queue = [];
    }

    isEmpty(){
        return this.queue.length == 0;
    }

    size(){
        return this.queue.length;
    }

    enqueue(item){
        this.queue.unshift(item);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        return this.queue.pop();
    }
}



class Stack {

    constructor(){
        this.input = new Queue();
        this.output = new Queue();
    }

    isEmpty(){
        return this.input.isEmpty();
    }

    size(){
        return this.input.size();
    }

    push(item){
        this.input.enqueue(item);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        while (this.input.size() > 1) {
            this.output.enqueue(this.input.dequeue());
        }
        let item = this.input.dequeue();
        while (!this.output.isEmpty()) {
            this.input.enqueue(this.output.dequeue());
        }
        return item;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        while (this.input.size() > 1) {
            this.output.enqueue(this.input.dequeue());
        }
        let item = this.input.dequeue();
        this.output.enqueue(item);
        while (!this.output.isEmpty()) {
            this.input.enqueue(this.output.dequeue());
        }
        return item;
    }
}


function reverseString(mystr){
    let s = new Stack();
    for(let i = 0; i < mystr.length; i++){
        let c = mystr.charAt(i);
        s.push(c);
    }

    let reversed = '';
    while(!s.isEmpty()){
        reversed += s.pop();
    }

    return reversed;
}

let res = reverseString('This string will be reversed ....');
console.log(res);

console.log('-----------------------------------------------');

function balancedSymbols(str){
    let s = new Stack();
    for(let i = 0; i < str.length; i++){
        let c = str.charAt(i);
        if('([{'.indexOf(c) != -1){
            s.push(c);
        }
        else if(')]}'.indexOf(c) != -1){
            if(s.isEmpty()){
                return false;
            }
            else if('([{'.indexOf(s.peek()) == ')]}'.indexOf(c)){
                s.pop();
            }
        }
    }

    return s.isEmpty();

}



console.log(balancedSymbols('{{([][])}()}'));
console.log(balancedSymbols('[{()]'));

console.log('-----------------------------------------------');


function baseConverter(dec, base){
    let stack = new Stack();
    let digits = '0123456789ABCDEF';

    while(dec > 0){
        stack.push(digits[dec % base]);
        dec = Math.floor(dec / base);
    }

    res = '';
    while(!stack.isEmpty()){
        res += stack.pop();
    }

    return res;
}


console.log(baseConverter(25,8)) // 31
console.log(baseConverter(256,16)) // 100
console.log(baseConverter(26,26)) // 10