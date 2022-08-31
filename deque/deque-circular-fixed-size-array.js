

class Deque {

    constructor(capacity = 10){
        this.capacity = capacity;
        this.deque = new Array(this.capacity);
        this.first = -1;
        this.last = -1;
        this.length = 0;
    }

    isEmpty(){
        return this.length == 0;
    }

    isFull(){
        return (this.last + 1) % this.capacity == this.first;
    }

    size(){
        return this.length;
    }

    addFirst(item){
        if(this.isFull()){
            throw new Error('Deque is full');
        }
        if(this.first == -1){
            this.first = this.last = 0;
        }
        else if(this.first == 0){
            this.first = this.capacity - 1;
        }
        else{
            this.first--;
        }
        this.deque[this.first] = item;
        this.length++;
    }

    addLast(item){
        if(this.isFull()){
            throw new Error('Deque is full');
        }
        if(this.first == -1){
            this.first = this.last = 0;
        }
        else{
            this.last = (this.last + 1) % this.capacity;
        }
        this.deque[this.last] = item;
        this.length++;
    }

    removeFirst(){
        if(this.isEmpty()){
            throw new Error('Deque is empty');
        }
        let item = this.deque[this.first];
        if(this.first == this.last){
            this.first = this.last = -1;
        }
        else{
            this.first = (this.first + 1) % this.capacity;
        }
        this.length--;
        return item;
    }

    removeLast(){
        if(this.isEmpty()){
            throw new Error('Deque is empty');
        }
        let item = this.deque[this.last];
        if(this.first == this.last){
            this.first = this.last = -1;
        }
        else if(this.last == 0){
            this.last = this.capacity - 1;
        }
        else{
            this.last--;
        }
        this.length--;
        return item;
    }
}

function isPalindrome(string){
    d = new Deque(string.length);
    for(s of string){
        d.addLast(s);
    }

    while(d.size() > 1){
        if(d.removeFirst() != d.removeLast()){
            return false;
        }
    }
    return true;
}



console.log(isPalindrome('kayak'));
console.log(isPalindrome('kayyak'));
console.log(isPalindrome('kaykak'));