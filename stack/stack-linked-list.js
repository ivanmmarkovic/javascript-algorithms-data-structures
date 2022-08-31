
class Node {
    constructor(payload = null, next = null){
        this.payload = payload;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.head == null;
    }

    size(){
        return this.length;
    }

    push(item){
        this.head = new Node(item, this.head);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        let node = this.head;
        this.head = this.head.next;
        this.length -= 1;
        return node.payload;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.head.payload;
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