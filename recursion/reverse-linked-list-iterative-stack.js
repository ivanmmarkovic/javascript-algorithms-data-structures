
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


class Node {

    constructor(payload=null, next=null){
        this.payload = payload;
        this.next = next;
    }
}

function reverseList(node){

    let stack = new Stack();
    while(node != null){
        stack.push(node);
        node = node.next;
    }

    let head = new Node(), h = head;

    while(!stack.isEmpty()){
        h.next = stack.peek();
        stack.peek().next = null;
        stack.pop();
        h = h.next;
    }

    return head.next;
}