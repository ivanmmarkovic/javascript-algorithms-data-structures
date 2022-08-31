
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