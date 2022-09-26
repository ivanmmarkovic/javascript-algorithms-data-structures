
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


class Graph {

    constructor(){
        this.vertices = new Set();
        this.prev = new Map();
        this.distance = new Map();
        this.colors = new Map();
        this.adjacencyMap = new Map();
    }

    addVertex(vertex){
        this.vertices.add(vertex);
        this.prev.set(vertex, null);
        this.distance.set(vertex, 0);
        this.adjacencyMap.set(vertex, new Set());
        this.colors.set(vertex, 'white');
    }

    addEdge(v1, v2){
        this.adjacencyMap.get(v1).add(v2);
        this.adjacencyMap.get(v2).add(v1);
    }

    minimumSpanningTree(vertex){
        let edges = [];
        let q = new Queue();
        this.colors.set(vertex, 'gray');
        q.enqueue(vertex);
        let v;
        let neighbours;
        while(!q.isEmpty()){
            v = q.dequeue();
            neighbours = this.adjacencyMap.get(v);
            for(let n of neighbours){
                if(this.colors.get(n) == 'white'){
                    this.colors.set(n, 'gray');
                    this.distance.set(n, this.distance.get(v) + 1);
                    this.prev.set(n, v);
                    edges.push([v, n]);
                    q.enqueue(n);
                }
            }
            this.colors.set(v, 'black');
        }
        return edges;
    }

}



let graph = new Graph();

let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for(let v of myVertices){
    graph.addVertex(v);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

let edges = graph.minimumSpanningTree("A");
console.log(edges);
