
class Node {
    
    constructor(payload=null, next=null){
        this.payload = payload;
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
            this.head = new Node(payload, this.head);
        }
    }

    addToTail(payload){
        if(this.isEmpty()){
            this.head = this.tail = new Node(payload);
        }
        else {
            this.tail.next = new Node(payload);
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
                let node;
                for(node = this.head; node.next != this.tail; node = node.next);
                node.next = null;
                this.tail = node;
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
            let node = this.head, prev = null;
            while(count < index){
                prev = node;
                node = node.next;
                count++;
            }
            prev.next = node.next;
        }
    }

    insertAfter(listElement, newElement){
        for(let node = this.head; node != null; node = node.next){
            if(node.payload == listElement){
                if(node == this.tail){
                    this.addToTail(newElement);
                }
                else{
                    node.next = new Node(newElement, node.next);
                }
                node = node.next;
            }
        }
    }

    insertBefore(listElement, newElement){
        let prev = null;
        for(let node = this.head; node != null; node = node.next){
            if(node.payload == listElement){
                if(node == this.head){
                    this.addToHead(newElement);
                }
                else{
                    prev.next = new Node(newElement, node);
                }
            }
            prev = node;
        }
    }

    sort(){
        let swapped = true;
        do {
            swapped = false;
            for(let node = this.head; node != this.tail; node = node.next){
                if(node.payload > node.next.payload){
                    let v = node.payload;
                    node.payload = node.next.payload;
                    node.next.payload = v;
                    swapped = true;
                }
            }
        } while (swapped);
    }
}