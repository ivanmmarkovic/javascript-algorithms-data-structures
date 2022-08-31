
class Queue {

    constructor(capacity = 10){
        this.capacity = capacity;
        this.queue = new Array(this.capacity);
        this.left = -1;
        this.right = -1;
        this.length = 0;
    }

    isEmpty(){
        return this.length == 0;
    }

    isFull(){
        return this.right == this.capacity - 1;
    }

    size(){
        return this.length;
    }
    
    enqueue(item){
        if(this.isFull()){
            throw new Error('Queue is full');
        }
        if(this.left == -1){
            this.left = 0;
        }
        this.right++;
        this.queue[this.right] = item;
        this.length++;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        let item = this.queue[this.left];
        if(this.left == this.right){
            this.left = this.right = 1;
        }
        else{
            this.left++;
        }
        this.length--;
        return item;
    }
}

function hotPotato(people, n){
    let q = new Queue(100);
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