

class Graph {

    constructor(){
        this.vertices = new Set();
        this.prev = new Map();
        this.edges = [];
    }

    addVertex(vertex){
        this.vertices.add(vertex);
        this.prev.set(vertex, null);
        this.distance.set(vertex, null);
    }

    addEdge(vertex1, vertex2, distance){
        this.edges.push([vertex1, vertex2, distance]);
    }

    bellmanFord(v){

        this.distance.set(v, 0);

        for(let v of this.vertices){

            for(let edge of this.edges){
    
                let [v1, v2, distance] = edge;
    
                if(this.distance.get(v1) == null){
                    continue;
                }
                if(this.distance.get(v2) == null){
                    this.distance.set(v2, this.distance.get(v1) + distance);
                    this.prev.set(v2, v1);
                    continue;
                }
                if(this.distance.get(v1) + distance < this.distance.get(v2)){
                    this.distance.set(v2, this.distance.get(v1) + distance);
                    this.prev.set(v2, v1);
                }

            }

        }

    }

    returnPath(v){
        if(this.prev.get(v) == null){
            return v;
        }
        else {
            return this.returnPath(this.prev.get(v)) + '->' +  v;
        }
    }

}