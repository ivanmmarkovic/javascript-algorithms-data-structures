

class Node {

    constructor(payload=null, next=null){
        this.payload = payload;
        this.next = next;
    }
}

function reverseList(head){
    if(head == null){
        return null;
    }
    else if(head.next == null){
        return head;
    }
    else {
        let next = head.next;
        head.next = null;
        let reversed = reverseList(next);
        next.next = head;
        return reversed;
    }
}