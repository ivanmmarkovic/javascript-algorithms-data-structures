
class Node {

    constructor(key=null, value=null, parent=null, left=null, right=null, balanceFactor = 0, leftSubtreeHeight = 0, rightSubtreeHeight = 0){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = left;
        this.right = right;
        this.balanceFactor = balanceFactor;
        this.leftSubtreeHeight = leftSubtreeHeight;
        this.rightSubtreeHeight = rightSubtreeHeight;
    }

    hasLeftChild(){
        return this.left != null;
    }

    hasRightChild(){
        return this.right != null;
    }

    hasBothChildren(){
        return this.hasLeftChild() && this.hasRightChild();
    }

    isLeaf(){
        return this.left == null && this.right == null;
    }

    hasParent(){
        return this.parent != null;
    }

    isRoot(){
        return this.parent == null;
    }

    isLeftChild(){
        if(!this.hasParent()){
            return false;
        }
        return this.parent.left == this;
    }

    isRightChild(){
        if(!this.hasParent()){
            return false;
        }
        return this.parent.right == this;
    }

    findMaxInLeftSubtree(){
        let node = this.left;
        while(node.right != null){
            node = node.right;
        }
        return node;
    }

    findMinInRightSubtree(){
        let node = this.right;
        while(node.left != null){
            node = node.left;
        }
        return node;
    }

}


class AVLTree {

    constructor(){
        this.root = null;
        this.length = 0;
    }

    insert(key, value){
        if(this.root == null){
            this.root = new Node(key, value);
            this.length++;
        }
        else {
            this.insertHelper(this.root, key, value);
        }
    }

    insertHelper(node, key, value){
        if(node.key == key){
            node.value = value;
        }
        else if(node.key > key){
            if(node.hasLeftChild()){
                this.insertHelper(node.left, key, value);
            }
            else {
                node.left = new Node(key, value, node);
                this.length++;
                this.update(node);
            }
        }
        else {
            if(node.hasRightChild()){
                this.insertHelper(node.right, key, value);
            }
            else {
                node.right = new Node(key, value, node);
                this.length++;
                this.update(node);
            }
        }
    }

    get(key){
        if(this.root == null){
            return null;
        }
        else {
            return getHelper(this.root, key);
        }
    }

    getHelper(node, key){
        if(node.key == key){
            return node;
        }
        else if(node.key > key){
            if(node.hasLeftChild()){
                return this.getHelper(node.left, key);
            }
            else {
                return null;
            }
        }
        else {
            if(node.hasRightChild()){
                return this.getHelper(node.right, key);
            }
            else {
                return null;
            }
        }
    }

    contains(key){
        let root = this.root;
        if(root == null){
            return false;
        }
        while(root != null){
            if(root.key == key){
                return true;
            }
            else if(key < root.key){
                root = root.left;
            }
            else {
                root = root.right;
            }
        }
        return false;
    }

    delete(key){
        let node = this.get(key);
        if(node == null){
            return;
        }
        if(node.isRoot()){
            if(node.isLeaf()){
                this.root = null;
                this.length--;
            }
            else if(node.hasBothChildren()){
                let maxNode = node.findMaxInLeftSubtree();
                let tmpKey = maxNode.key;
                let tmpValue = maxNode.value;
                this.delete(tmpKey);
                node.key = tmpKey;
                node.value = tmpValue;
            }
            else if(node.hasLeftChild()){
                this.root = node.left;
                this.root.parent = null;
                this.length--;
            }
            else{
                this.root = node.right;
                this.root.parent = null;
                this.length--;
            }
        }
        else {
            let parent = null;
            if(node.isLeaf()){
                parent = node.parent;
                if(node.isLeftChild()){
                    node.parent.left = null;
                }
                else {
                    node.parent.right = null;
                }
                this.length--;
            }
            else if(node.hasBothChildren()){
                let maxNode = node.findMaxInLeftSubtree();
                let tmpKey = maxNode.key;
                let tmpValue = maxNode.value;
                this.delete(tmpKey);
                node.key = tmpKey;
                node.value = tmpValue;
            }
            else if(node.hasLeftChild()){
                parent = node.parent;
                if(node.isLeftChild()){
                    node.parent.left = node.left;
                }
                else {
                    node.parent.right = node.left;
                }
                node.left.parent = node.parent;
                this.length--;
            }
            else{
                parent = node.parent;
                if(node.isLeftChild()){
                    node.parent.left = node.right;
                }
                else {
                    node.parent.right = node.right;
                }
                node.right.parent = node.parent;
                this.length--;   
            }
            if(parent != null){
                this.update(parent);
            }
        }
    }

    update(node){
        let oldBalanceFactor = node.balanceFactor;
        if(node.hasLeftChild()){
            node.leftSubtreeHeight = Math.max(node.left.leftSubtreeHeight, node.left.rightSubtreeHeight) + 1;
        }
        else {
            node.leftSubtreeHeight = 0;
        }

        if(node.hasRightChild()){
            node.rightSubtreeHeight = Math.max(node.right.leftSubtreeHeight, node.right.rightSubtreeHeight) + 1;
        }
        else {
            node.rightSubtreeHeight = 0;
        }

        node.balanceFactor = node.leftSubtreeHeight - node.rightSubtreeHeight;
        if(node.balanceFactor < -1 || node.balanceFactor > 1){
            this.rebalance(node);
            return;
        }
        if(node.balanceFactor != oldBalanceFactor && node.hasParent()){
            this.update(node.parent);
        }
    }

    rebalance(node){
        if(node.balanceFactor > 1){
            if(node.left.balanceFactor < 0){
                this.rotateLeft(node.left);
            }
            else {
                this.rotateRight(node);
            }
        }
        else {
            if(node.right.balanceFactor > 0){
                this.rotateRight(node.right);
            }
            else {
                this.rotateLeft(node);
            }
        }
    }

    rotateLeft(node){
        let oldRoot = node;
        let newRoot = node.left;

        oldRoot.right = newRoot.left;
        if(newRoot.hasLeftChild()){
            newRoot.left.parent = oldRoot;
        }

        newRoot.parent = oldRoot.parent;
        if(oldRoot.hasParent()){
            if(oldRoot.isLeftChild()){
                oldRoot.parent.left = newRoot;
            }
            else {
                oldRoot.parent.right = newRoot;
            }
        }
        else {
            this.root = newRoot;
        }

        oldRoot.parent = newRoot;
        newRoot.left = oldRoot;
        this.update(oldRoot);
    }

    rotateRight(node){
        let oldRoot = node;
        let newRoot = node.left;

        oldRoot.left = newRoot.right;
        if(newRoot.hasRightChild()){
            newRoot.right.parent = oldRoot;
        }

        newRoot.parent = oldRoot.parent;
        if(oldRoot.hasParent()){
            if(oldRoot.isLeftChild()){
                oldRoot.parent.left = newRoot;
            }
            else {
                oldRoot.parent.right = newRoot;
            }
        }
        else {
            this.root = newRoot;
        }

        oldRoot.parent = newRoot;
        newRoot.right = oldRoot;
        this.update(oldRoot);
    }

}
