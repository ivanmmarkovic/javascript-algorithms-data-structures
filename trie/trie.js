

class TrieNode {

    constructor(key=null, parent=null){
        this.key = key;
        this.parent = parent;
        this.children = new Map();
        this.terminating = false;
    }

}


class Trie {

    constructor(){
        this.root = new TrieNode();
    }

    insert(string){
        let root = this.root;
        for(let i = 0; i < string.length; i++){
            let c = string.charAt(i);
            if(!root.children.has(c)){
                root.children.set(c, new TrieNode(c, root));
            }
            root = root.children.get(c);
        }
        root.terminating = true;

    }

    contains(string){
        let root = this.root;
        for(let i = 0; i < string.length; i++){
            let c = string.charAt(i);
            if(!root.children.has(c)){
                return false;
            }
            root = root.children.get(c);
        }
        return root.terminating;
    }

    getAllWords(){
        let root = this.root;
        let words = [];
        this.getAllWordsHelper(root, '', words);
        return words;
    }

    getAllWordsHelper(root, string, words){
        if(root == null){
            return;
        }
        if(root.key != null){
            string += root.key;
        }
        if(root.terminating){
            words.push(string);
        }
        for(let node of root.children.values()){
            this.getAllWordsHelper(node, new String(string), words);
        }
    }

    countAllWords(){
        let root = this.root;
        return this.countAllWordsHelper(root);
    }

    countAllWordsHelper(root){
        if(root == null){
            return 0;
        }
        let count = 0;
        if(root.terminating){
            count++;
        }
        for(let node of root.children.values()){
            count += this.countAllWordsHelper(node);
        }
        return count;
    }

    deleteWord(string){
        let root = this.root;
        for(let i = 0; i < string.length; i++){
            let c = string.charAt(i);
            if(!root.children.has(c)){
                return;
            }
            root = root.children.get(c);
        }
        root.terminating = false;

        let parent;
        while(!root.terminating && root.children.size == 0 && root.parent != null){
            parent = root.parent;
            parent.children.delete(root.key);
            root = parent;
        }
    }
}


let t = new Trie();

console.log('Insert java and rust');
t.insert('java');
t.insert('rust');

console.log('Contains java : ', t.contains('java'));
console.log('Contains java : ', t.contains('rust'));
console.log('Contains javascript : ', t.contains('javascript'));
console.log('All words ', t.getAllWords());
console.log('Count all words ', t.countAllWords());

console.log('------------------------------------------');

console.log('Insert javascript');
t.insert('javascript');
console.log('Contains java : ', t.contains('java'));
console.log('Contains java : ', t.contains('rust'));
console.log('Contains javascript : ', t.contains('javascript'));
console.log('All words ', t.getAllWords());
console.log('Count all words ', t.countAllWords());


console.log('------------------------------------------');

console.log('Delete rust');
t.deleteWord('rust');
console.log('Contains java : ', t.contains('java'));
console.log('Contains java : ', t.contains('rust'));
console.log('Contains javascript : ', t.contains('javascript'));
console.log('All words ', t.getAllWords());
console.log('Count all words ', t.countAllWords());