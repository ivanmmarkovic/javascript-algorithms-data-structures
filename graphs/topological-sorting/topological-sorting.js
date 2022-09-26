

class Graph {

    constructor(){
        this.vertices = new Set();
        this.colors = new Map();
        this.adjacencyMap = new Map();
        this.noIncomingEdges = new Set();
        this.visited = [];
    }


    addVertex(vertex){
        this.vertices.add(vertex);
        this.adjacencyMap.set(vertex, new Set());
        this.noIncomingEdges.add(vertex);
        this.colors.set(vertex, 'white');
    }


    addEdge(v1, v2){
        this.adjacencyMap.get(v1).add(v2);
        if(this.noIncomingEdges.has(v2)){
            this.noIncomingEdges.delete(v2);
        }
    }

    topsort(){
        for(let v of this.noIncomingEdges){
            if(this.colors.get(v) == 'white'){
                this.dfs(v);
            }
        }
        this.visited.reverse();
        return this.visited;
    }

    dfs(vertex){
        this.colors.set(vertex, 'gray');

        let neighbours = this.adjacencyMap.get(vertex);
        for(let n of neighbours){
            if(this.colors.get(n) == 'white'){
                this.dfs(n);
            }
        }

        this.colors.set(vertex, 'black');
        this.visited.push(vertex)
    }

}




let graph = new Graph();

let vertices = ["a", "b", "c", "d", "e", "f"];
for(let vertex of vertices)
    graph.addVertex(vertex);


graph.addEdge("a", "c")
graph.addEdge("c", "d")
graph.addEdge("c", "f")
graph.addEdge("b", "c")
graph.addEdge("b", "e")

console.log(graph.topsort());