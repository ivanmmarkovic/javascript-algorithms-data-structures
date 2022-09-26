
class Stack {

    constructor(){
        this.stack = []; 
    }

    isEmpty(){
        return this.stack.length == 0;
    }

    size(){
        return this.stack.length;
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.stack[this.stack.length - 1];
    }
}

class Graph {

    constructor(){
        this.vertices = new Set();
        this.prev = new Map();
        this.distance = new Map();
        this.colors = new Map();
        this.adjacencyMap = new Map();
        this.entry = new Map();
        this.exit = new Map();
        this.time = 0;
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


    dfs(vertex){
        let s = new Stack();
        this.colors.set(vertex, 'gray');
        s.push(vertex);
        this.time++;
        this.entry.set(vertex, this.time);

        let v;
        let neighbours;
        while(!s.isEmpty()){
            v = s.peek();
            let n = this.findUnvisitedNeighbour(v);
            if(n != null){
                this.colors.set(n, 'gray');
                this.distance.set(n, this.distance.get(v) + 1);
                this.prev.set(n, v);
                this.time++;
                this.entry.set(n, this.time);
                s.push(n);
            }
            else {
                this.time++;
                this.exit.set(v, this.time);
                this.colors.set(v, 'black');
                s.pop();
            }
        }
    }


    findUnvisitedNeighbour(v){
        let neighbours = this.adjacencyMap.get(v);
        for(let n of neighbours){
            if(this.colors.get(n) == 'white'){
                return n;
            }
        }
        return null;
    }


    returnPath(vertex){
        if(this.prev.get(vertex) == null){
            return vertex;
        }
        else {
            return this.returnPath(this.prev.get(vertex)) + ' -> ' + vertex;
        }
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

graph.dfs("A");
console.log(graph.returnPath("H"));
