

class Node {
    constructor(payload = null, next = null){
        this.payload = payload;
        this.next = next;
    }
}


class Queue {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length == 0;
    }

    size(){
        return this.length;
    }
    
    enqueue(item){
        if(this.isEmpty()){
            this.head = this.tail = new Node(item);
        }
        else{
            this.tail.next = new Node(item);
            this.tail = this.tail.next;
        }
        this.length += 1;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        let node = this.head;
        if(this.head == this.tail){
            this.head = this.tail = null;
        }
        else{
            this.head = this.head.next;
        }
        this.length -= 1;
        return node.payload;
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