

class Deque {

    constructor(){
        this.deque = [];
    }

    isEmpty(){
        return this.deque.length == 0;
    }

    size(){
        return this.deque.length;
    }

    addFirst(item){
        this.deque.unshift(item);
    }

    addLast(item){
        this.deque.push(item);
    }

    removeFirst(){
        if(this.isEmpty()){
            throw new Error('Deque is empty');
        }
        return this.deque.shift();
    }

    removeLast(){
        if(this.isEmpty()){
            throw new Error('Deque is empty');
        }
        return this.deque.pop();
    }
}

function isPalindrome(string){
    d = new Deque();
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