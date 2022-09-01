
class Node {
    
    constructor(payload=null, prev=null, next=null){
        this.payload = payload;
        this.prev = prev;
        this.next = next;
    }

}


class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
    }

    isEmpty(){
        return this.head == null;
    }

    numberOfElements(){
        if(this.isEmpty()){
            return 0;
        }
        let count = 0;
        let node = this.head;
        do {
            count++;
            node = node.next;
        } while (node != this.head);
        return count;
    }

    printAll(){
        if(this.isEmpty()){
            return;
        }

        let node = this.head;
        do {
            console.log(node.payload);
            node = node.next;
        } while (node != this.head);
    }

    addToHead(payload){
        if(this.isEmpty()){
            this.head = this.tail = new Node(payload);
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        else {
            this.head = new Node(payload, this.tail, this.head);
            this.head.next.prev = this.head;
            this.tail.next = this.head;
        }
    }

    addToTail(payload){
        if(this.isEmpty()){
            this.head = this.tail = new Node(payload);
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        else {
            this.tail.next = new Node(payload, this.tail, this.head);
            this.tail = this.tail.next;
            this.head.prev = this.tail;
        }
    }

    deleteFromHead(){
        if(this.isEmpty()){
            return null;
        }
        else{
            let payload = this.head.payload;
            if(this.head == this.tail){
                this.head = this.tail = null;
            }
            else{
                this.head = this.head.next;
                this.head.prev = this.tail;
                this.tail.next = this.head;
            }
            return payload;
        }
    }

    deleteFromTail(){
        if(this.isEmpty()){
            return null;
        }
        else{
            let payload = this.tail.payload;
            if(this.head == this.tail){
                this.head = this.tail = null;
            }
            else{
                this.tail = this.tail.prev;
                this.tail.next = this.head;
                this.head.prev = this.tail;
            }
            return payload;
        }
    }

    deleteNodesWithValue(value){
        if(this.isEmpty()) {
            return;
        }
        let node = this.head;
        while(node.next != this.head){
            if(node.next.payload == value){
                node.next = node.next.next;
                node.next.prev = node;
            }
            else {
                node = node.next;
            }
        }
        this.tail = node;
        if(this.head.payload == value){
            this.deleteFromHead();
        }

    }

    deleteOnIndex(index){
        let lastIndex = this.numberOfElements() - 1;
        if(index < 0 || index > lastIndex){
            return;
        }
        if(index == 0){
            this.deleteFromHead();
        }
        else if(index == lastIndex){
            this.deleteFromTail();
        }
        else {
            let count = 0;
            let node = this.head;
            while(count < index){
                node = node.next;
                count++;
            }
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }

    insertAfter(listElement, newElement){
        if(this.isEmpty()){
            return;
        }
        let node = this.head;
        do {
            if(node.payload == listElement){
                if(node == this.tail){
                    this.addToTail(newElement);
                }
                else{
                    let newNode = new Node(newElement, node, node.next);
                    node.next = newNode;
                    newNode.next.prev = newNode;
                }
                node = node.next;
            }
            node = node.next;
        } while (node != this.head);
    }

    insertBefore(listElement, newElement){
        if(this.isEmpty()){
            return;
        }
        let node = this.head;
        do {
            if(node.payload == listElement){
                if(node == this.head){
                    this.addToHead(newElement);
                }
                else{
                    let newNode = new Node(newElement, node.prev, node);
                    node.prev = newNode;
                    newNode.prev.next = newNode;
                }
            }
            node = node.next;
        } while (node != this.head);
    }

    sort(){
        for(let outer = this.head; outer != this.tail; outer = outer.next){
            for(let inner = this.tail; inner != outer; inner = inner.prev){
                if(inner.prev.payload > inner.payload){
                    let v = inner.payload;
                    inner.payload = inner.prev.payload;
                    inner.prev.payload = v;
                }
            }
        }
    }
}