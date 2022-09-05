

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

let size = 5
let matrix = new Array(size);
for(let i = 0; i < size; i++){
    matrix[i] = new Array(size);
    for(let j = 0; j < size; j++){
        matrix[i][j] = 0;
    }
}
/*
0 - not visited
1 - visited
2 - obstacle
*/
// place maze obstacles
matrix[0][2] = 2;
matrix[0][3] = 2;
matrix[1][0] = 2;
matrix[2][2] = 2;
matrix[2][3] = 2;
matrix[2][4] = 2;
matrix[3][1] = 2;
matrix[4][3] = 2;

// starting position
matrix[0][0] = 1

let stack = new Stack();
stack.push([0, 0]);


function pathFind(maze, stack){
    if(stack.isEmpty()){
        console.log("Path not found");
    }
    else{
        let coords = stack.peek();
        let x = coords[0];
        let y = coords[1];
        if(x == maze.length - 1 && y == maze[x].length - 1){
            console.log("Path found");
        }
        else if(y < maze[x].length - 1 && maze[x][y + 1] == 0){
            maze[x][y + 1] = 1;
            stack.push([x, y + 1]);
            pathFind(maze, stack);
        }
        else if(y > 0 && maze[x][y - 1] == 0){
            maze[x][y - 1] = 1;
            stack.push([x, y - 1]);
            pathFind(maze, stack);
        }
        else if(x < maze.length - 1 && maze[x + 1][y] == 0){
            maze[x + 1][y] = 1;
            stack.push([x + 1, y]);
            pathFind(maze, stack);
        }
        else if(x > 0 && maze[x - 1][y] == 0){
            maze[x - 1][y] = 1;
            stack.push([x - 1, y]);
            pathFind(maze, stack);
        }
        else{
            stack.pop();
            pathFind(maze, stack);
        }
    }
};

pathFind(matrix, stack);