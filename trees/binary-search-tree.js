

class Node {

    constructor(key=null, value=null, parent=null, left=null, right=null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = left;
        this.right = right;
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


class BinarySearchTree {

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
            }
        }
        else {
            if(node.hasRightChild()){
                this.insertHelper(node.right, key, value);
            }
            else {
                node.right = new Node(key, value, node);
                this.length++;
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
            if(node.isLeaf()){
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
                if(node.isLeftChild()){
                    node.parent.left = node.right;
                }
                else {
                    node.parent.right = node.right;
                }
                node.right.parent = node.parent;
                this.length--;   
            }
        }
    }

}
