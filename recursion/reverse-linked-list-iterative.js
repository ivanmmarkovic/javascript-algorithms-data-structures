

class Node {

    constructor(payload=null, next=null){
        this.payload = payload;
        this.next = next;
    }
}

function reverseList(head){
    if(head == null || head.next == null){
        return head;
    }

    let next = head.next;
    head.next = null;

    while(true){
        let tmp = next.next;
        next.next = head;
        if(tmp == null){
            break;
        }
        else{
            head = next;
            next = tmp;
        }
    }

    return next;
    
}