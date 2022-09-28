
class Vertex {

    constructor(label=null, weight=Number.MAX_VALUE, index=null){
        this.label = label;
        this.weight = weight;
        this.index = index;
    }

}


class PriorityQueue {

    constructor(){
        this.queue = [null];
        this.pointer = 0;
    }

    insert(vertex){
        this.pointer++;
        vertex.index = this.pointer;
        this.queue.push(vertex);
        this.percUp(this.pointer);
    }

    isEmpty(){
        return this.pointer == 0;
    }

    percUp(index){
        while(Math.floor(index / 2) > 0){
            let i = Math.floor(index / 2);
            if(this.queue[index].weight < this.queue[i].weight){
                let v = this.queue[index];
                this.queue[index] = this.queue[i];
                this.queue[i] = v;
                this.queue[index].index = index;
                this.queue[i].index = i;
            }
            index = Math.floor(index / 2);
        }
    }

    decreaseKey(key){
        this.percUp(key);
    }

    getMin(){
        if(this.isEmpty()){
            throw new Error('PriorityQueue is empty');
        }
        return this.queue[1];
    }

    deleteMin(){
        if(this.isEmpty()){
            throw new Error('PriorityQueue is empty');
        }
        let minVertex = this.queue[1];
        this.queue[1] = this.queue[this.pointer];
        this.queue[1].index = 1;
        this.queue.pop();
        this.pointer--;
        this.percDown(1);
        return minVertex;
    }

    percDown(index){
        while(index * 2 <= this.pointer){
            let i = this.findMinIndex(index);
            if(this.queue[index].weight > this.queue[i].weight){
                let v = this.queue[index];
                this.queue[index] = this.queue[i];
                this.queue[i] = v;
                this.queue[index].index = index;
                this.queue[i].index = i;
            }
            index = i;
        }
    }

    findMinIndex(index){
        if(index * 2 + 1 > this.pointer){
            return index * 2;
        }
        else {
            if(this.queue[index * 2].weight <= this.queue[index * 2 + 1].weight){
                return index * 2;
            }
            else {
                return index * 2 + 1;
            }
        }
    }
}


class Graph {

    constructor(){
        this.vertices = new Map();
        this.prev = new Map();
        this.adjacencyMap = new Map();
    }

    addVertex(label){
        this.vertices.set(label, new Vertex(label));
        this.prev.set(label, null);
        this.adjacencyMap.set(label, new Set());
    }

    addEdge(label1, label2, weight){
        this.adjacencyMap.get(label1).add(new Vertex(label2, weight));
    }

    dijkstra(label){
        let vertex = this.vertices.get(label);
        vertex.weight = 0;
        let pq = new PriorityQueue();
        for(let [l, v] of this.vertices){
            pq.insert(v);
        }
        while(!pq.isEmpty()){
            let tmp = pq.deleteMin();
            for(let n of this.adjacencyMap.get(tmp.label)){
                let o = this.vertices.get(n.label);
                if(tmp.weight + n.weight < o.weight){
                    this.prev.set(o.label, tmp.label);
                    o.weight = tmp.weight + n.weight;
                    pq.decreaseKey(o.index);
                }
            }
        }
    }


    returnPath(label){
        if(this.prev.get(label) == null){
            return label;
        }
        else {
            return this.returnPath(this.prev.get(label)) + ' -> ' + label;
        }
    }

}


let graph = new Graph();

graph.addVertex("START");
graph.addVertex("A");
graph.addVertex("C");
graph.addVertex("B");
graph.addVertex("D");
graph.addVertex("END");

graph.addEdge("START", "A", 0);
graph.addEdge("START", "C", 2);
graph.addEdge("A", "B", 18);
graph.addEdge("A", "D", 15);
graph.addEdge("C", "B", 3);
graph.addEdge("C", "D", 10);
graph.addEdge("B", "END", 150);
graph.addEdge("D", "END", 15);
graph.dijkstra("START");

console.log(graph.returnPath("END"));