
class Node {
    
    constructor(payload=null, prev = null, next=null){
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
        let count = 0;
        for(let node = this.head; node != null; node = node.next){
            count++;
        }
        return count;
    }

    printAll(){
        for(let node = this.head; node != null; node = node.next){
            console.log(node.payload);
        }
    }

    addToHead(payload){
        if(this.isEmpty()){
            this.head = this.tail = new Node(payload);
        }
        else {
            this.head = new Node(payload, null, this.head);
            this.head.next.prev = this.head;
        }
    }

    addToTail(payload){
        if(this.isEmpty()){
            this.head = this.tail = new Node(payload);
        }
        else {
            this.tail.next = new Node(payload, this.tail, null);
            this.tail = this.tail.next;
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
                this.head.prev = null;
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
                this.tail.next = null;
            }
            return payload;
        }
    }

    deleteNodesWithValue(value){
        if(this.isEmpty()) {
            return;
        }
        let node = this.head;
        while(node.next != null){
            if(node.next.payload == value){
                node.next = node.next.next;
                if(node.next != null){
                    node.next.prev = node;
                }
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
        for(let node = this.head; node != null; node = node.next){
            if(node.payload == listElement){
                if(node == this.tail){
                    this.addToTail(newElement);
                }
                else{
                    let newNode = new Node(newElement, node, node.next);
                    newNode.next.prev = newNode;
                    node.next = newNode;
                }
                node = node.next;
            }
        }
    }

    insertBefore(listElement, newElement){
        for(let node = this.head; node != null; node = node.next){
            if(node.payload == listElement){
                if(node == this.head){
                    this.addToHead(newElement);
                }
                else{
                    let newNode = new Node(newElement, node.prev, node);
                    newNode.prev.next = newNode;
                    node.prev = newNode;
                }
            }
        }
    }

    sort(){
        for(let outer = this.head; outer != null; outer = outer.next){
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