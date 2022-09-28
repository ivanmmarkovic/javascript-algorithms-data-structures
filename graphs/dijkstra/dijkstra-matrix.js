
class Vertex {

    constructor(label=null, weight=Number.MAX_VALUE, index=null){
        this.label = label;
        this.weight = weight;
        this.index = index;
    }

}


class Graph {

    constructor(capacity=10){
        this.capacity = capacity;
        this.pointer = 0;
        this.verticesByLabel = new Map();
        this.verticesByIndex = new Map();
        this.prev = new Map();
        this.adjacencyMatrix = new Array(this.capacity);
        for(let i = 0; i < this.capacity; i++){
            this.adjacencyMatrix[i] = new Array(this.capacity);
        }
        this.visited = new Set();
    }

    addVertex(label){
        let v = new Vertex(label, Number.MAX_VALUE, this.pointer);
        this.verticesByLabel.set(label, v);
        this.verticesByIndex.set(this.pointer, v);
        this.pointer++;
        this.prev.set(label, null);
    }

    addEdge(label1, label2, weight){
        let index1 = this.verticesByLabel.get(label1).index;
        let index2 = this.verticesByLabel.get(label2).index;
        this.adjacencyMatrix[index1][index2] = weight;
    }

    dijkstra(label){

        let vertex = this.verticesByLabel.get(label);
        vertex.weight = 0;

        while(vertex != null){
            let index = vertex.index;
            let neighbours = this.adjacencyMatrix[index];
            for(let i = 0; i < neighbours.length; i++){
                let weight = neighbours[i];
                if(weight != undefined){
                    let o = this.verticesByIndex.get(i);
                    if(vertex.weight + weight < o.weight){
                        o.weight = vertex.weight + weight;
                        this.prev.set(o.label, vertex.label);
                    }
                }
            }
            this.visited.add(vertex.label);
            vertex = this.findUnvisitedVertex();
        }

    }

    findUnvisitedVertex(){
        for(let [index, v] of this.verticesByIndex){
            if(!this.visited.has(v.label)){
                return v;
            }
        }
        return null;
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