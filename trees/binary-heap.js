

class BinaryHeap {

    constructor(){
        this.heap = [null];
        this.pointer = 0;
    }

    isEmpty(){
        return this.pointer == 0;
    }

    insert(item){
        this.heap.push(item);
        this.pointer++;
        this.percUp(this.pointer);
    }

    percUp(index){
        while(Math.floor(index / 2) > 0){
            let i = Math.floor(index / 2);
            if(this.heap[i] > this.heap[index]){
                let tmp = this.heap[i];
                this.heap[i] = this.heap[index];
                this.heap[index] = tmp;
            }
            index = i;
        }
    }

    deleteMin(){
        if(this.isEmpty()){
            throw new Error('Heap is empty');
        }
        let v = this.heap[1];
        this.heap[1] = this.heap[this.pointer];
        this.heap.pop();
        this.pointer--;
        this.percDown(1);
        return v;
    }

    percDown(index){
        while(index * 2 <= this.pointer){
            let i = this.findMinIndex(index);
            if(this.heap[index] > this.heap[i]){
                let tmp = this.heap[i];
                this.heap[i] = this.heap[index];
                this.heap[index] = tmp;
            }
            index = i;
        }
    }

    findMinIndex(index){
        if(index * 2 + 1 > this.pointer){
            return index * 2;
        }
        else{
            if(this.heap[index * 2] <= this.heap[index * 2 + 1]){
                return index * 2;
            }
            else{
                return index * 2 + 1;
            }
        }
    }

    getMin(){
        if(this.isEmpty()){
            throw new Error('Heap is empty');
        }
        return this.heap[1];
    }

    buildHeap(vals){
        for(v of vals){
            this.insert(v);
        }
    }
}



let bh = new BinaryHeap();
bh.insert(100);
bh.insert(1);
bh.insert(5);


console.log(bh.heap);

while(!bh.isEmpty()){
    console.log(bh.deleteMin());
}