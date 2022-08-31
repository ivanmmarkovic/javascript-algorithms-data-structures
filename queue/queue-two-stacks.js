
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


class Queue {

    constructor(){
        this.input = new Stack();
        this.output = new Stack();
    }

    isEmpty(){
        return this.input.isEmpty();
    }

    size(){
        return this.input.size();
    }
    
    enqueue(item){
        this.input.push(item);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        while(!this.input.isEmpty()){
            this.output.push(this.input.pop());
        }
        let item = this.output.pop();
        while(!this.output.isEmpty()){
            this.input.push(this.output.pop());
        }
        return item;
    }
}

function hotPotato(people, n){
    let q = new Queue();
    for(person of people){
        q.enqueue(person);
    }


    while(q.size() > 1){
        for(let i = 0; i < n; i++){
            q.enqueue(q.dequeue());
        }
        q.dequeue();
    }
    
    return q.dequeue();
}

console.log(hotPotato(["Bill","David","Susan","Jane","Kent","Brad"],7));