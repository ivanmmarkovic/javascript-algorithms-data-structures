
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
        this.adjacencyMap = new Map();
        this.adjacencyMapReversed = new Map();
        this.stack = new Stack();
        this.colors = new Map();
    }


    addVertex(vertex){
        this.vertices.add(vertex);
        this.adjacencyMap.set(vertex, new Set());
        this.adjacencyMapReversed.set(vertex, new Set());
        this.colors.set(vertex, 'white');
    }


    addEdge(v1, v2){
        this.adjacencyMap.get(v1).add(v2);
        this.adjacencyMapReversed.get(v2).add(v1);
    }


    kosaraju(){
        for(let v of this.vertices){
            if(this.colors.get(v) == 'white'){
                this.dfs(v);
            }
        }

        for(let v of this.colors.keys()){
            this.colors.set(v, 'white');
        }

        let connected = [];

        while(!this.stack.isEmpty()){
            let v = this.stack.pop();
            if(this.colors.get(v) == 'white'){
                let c = [];
                this.dfsReversed(v, c);
                if(c.length > 0){
                    connected.push(c);
                }
            }
        }

        console.log(connected);

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
        this.stack.push(vertex);
    }

    dfsReversed(v, c){
        this.colors.set(v, 'gray');
        c.push(v);

        let neighbours = this.adjacencyMapReversed.get(v);
        for(let n of neighbours){
            if(this.colors.get(n) == 'white'){
                this.dfsReversed(n, c);
            }
        }

        this.colors.set(v, 'black');
    }
    
}




let g = new Graph();
for(let i = 0; i < 9; i++){
    g.addVertex(`${i}`);
}

g.addEdge('0', '1');
g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '0');
g.addEdge('2', '4');
g.addEdge('4', '5');
g.addEdge('5', '6');
g.addEdge('6', '4');
g.addEdge('7', '6');
g.addEdge('8', '7');

g.kosaraju();
