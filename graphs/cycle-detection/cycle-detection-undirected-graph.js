

class Graph {

    constructor(){
        this.vertices = new Set();
        this.colors = new Map();
        this.adjacencyMap = new Map();
        this.prev = new Map();
    }


    addVertex(vertex){
        this.vertices.add(vertex);
        this.adjacencyMap.set(vertex, new Set());
        this.colors.set(vertex, 'white');
        this.prev.set(vertex, null);
    }


    addEdge(v1, v2){
        this.adjacencyMap.get(v1).add(v2);
    }

    dfs(vertex){
        this.colors.set(vertex, 'gray');

        let neighbours = this.adjacencyMap.get(vertex);
        for(let n of neighbours){
            if(this.colors.get(n) == 'gray' && this.prev.get(vertex) != n){
                console.log(`Cycle from ${vertex} to ${n}`);
            }
            if(this.colors.get(n) == 'white'){
                this.prev.set(n, vertex);
                this.dfs(n);
            }
        }

        this.colors.set(vertex, 'black');
    }

}




let graph = new Graph();


let vertices = ["a", "b", "c", "d"];
for(let vertex of vertices)
    graph.addVertex(vertex);

graph.addEdge("a", "b");
graph.addEdge("b", "c");
graph.addEdge("c", "d");
graph.addEdge("d", "b");

graph.dfs("a");