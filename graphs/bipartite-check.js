

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
        this.adjacencyMap = new Map();
        this.colors = new Map();
    }

    addVertex(vertex){
        this.vertices.add(vertex);
        this.adjacencyMap.set(vertex, new Set());
    }

    addEdge(v1, v2){
        this.adjacencyMap.get(v1).add(v2);
        this.adjacencyMap.get(v2).add(v1);
    }

    bipartiteCheck(){
        for(let v of this.vertices) {
            if(this.colors.has(v)){
                continue;
            }
            this.colors.set(v, 1);
            let q = new Queue();
            q.enqueue(v);
            while(!q.isEmpty()){
                let tmp = q.dequeue();
                for(let n of this.adjacencyMap.get(tmp)){
                    if(!this.colors.has(n)){
                        let color = this.colors.get(tmp) == 1 ? -1 : 1;
                        this.colors.set(n, color);
                        q.enqueue(n);
                        continue;
                    }
                    if(this.colors.get(n) == this.colors.get(tmp)){
                        return false;
                    }
                }
            }

        }

        return true;
    }
}




let g = new Graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");

// a, b ||---|| c, d


g.addEdge("a", "c");
g.addEdge("a", "d");

g.addEdge("b", "c");
g.addEdge("b", "d");


// g.addEdge("a", "b");

console.log(g.bipartiteCheck());