

class Graph {

    constructor(){
        this.vertices = new Set();
        this.roots = new Map();
        this.edges = [];
    }

    addVertex(vertex){
        this.vertices.add(vertex);
        this.roots.set(vertex, vertex);
    }

    addEdge(vertex1, vertex2, weight){
        this.edges.push([vertex1, vertex2, weight]);
    }

    kruskal(){
        let  minimumSpanningTree = [];

        edges.sort((a, b) => a[2] - b[2]);

        for(let edge of this.edges){

            let [v1, v2] = edge;

            let root1 = this.findRoot(v1);
            let root2 = this.findRoot(v2);

            if(root1 != root2){
                this.roots.set(root1, root2);
                minimumSpanningTree.push([v1, v2]);
            }
        }
    }

    findRoot(v){
        if(this.roots.get(v) != v){
            this.roots.set(v, this.findRoot(this.roots.get(v)));
        }
        return this.roots.get(v);
    }

}