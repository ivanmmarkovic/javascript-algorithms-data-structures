

class Graph {

    constructor(){
        this.vertices = new Set();
        this.roots = new Map();
        this.ranks = new Map();
        this.edges = [];
    }

    addVertex(vertex){
        this.vertices.add(vertex);
        this.roots.set(vertex, vertex);
        this.ranks.set(vertex, 0);
    }

    addEdge(vertex1, vertex2, weight){
        this.edges.push([vertex1, vertex2, weight]);
    }

    unionFind(){

        for(let edge of this.edges){

            let [v1, v2] = edge;

            let root1 = this.findRoot(v1);
            let root2 = this.findRoot(v2);

            if(this.ranks.get(root1) > this.ranks.get(root2)){
                this.roots.set(root2, root1);
                this.ranks.set(root1, this.ranks.get(root1) + 1);
            }
            else {
                this.roots.set(root1, root2);
                this.ranks.set(root2, this.ranks.get(root2) + 1);
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