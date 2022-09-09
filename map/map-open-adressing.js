

/*

keys = [-1, -1, -1, 44, -1]
Caling put method for key 44 and looking for -1 doesn't solve a problem.

*/
class HashTable {

    constructor(capacity = 11){
        this.capacity = capacity;
        this.keys = new Array(this.capacity);
        this.values = new Array(this.capacity);
        this.length = 0;
    }

    put(key, value){
        let [exists, i] = this.contains(key);
        if(exists){
            this.values[i] = value;
            return;
        }
        let index = this.hash(key);
        if(this.keys[index] == undefined || this.keys[index] == -1){
            this.keys[index] = key;
            this.values[index] = value;
            this.length++;
        }
        else {
            let new_index = this.rehash(index);
            while(new_index != index && this.keys[new_index] != -1 && this.keys[new_index] != undefined){
                new_index = this.rehash(new_index);
            }
            if(this.keys[new_index] == undefined || this.keys[new_index] == -1){
                this.keys[new_index] = key;
                this.values[new_index] = value;
                this.length++;
            }
        }
    }

    get(key){
        let [exists, i] = this.contains(key);
        if(exists){
            return this.values[i];
        }
        return null;
    }

    delete(key){
        let [exists, i] = this.contains(key);
        if(exists){
            this.keys[i] = -1;
            this.values[i] = null;
            this.length--;
        }
    }

    contains(key){
        let index = this.hash(key);
        if(this.keys[index] == key){
            return [true, index];
        }
        else if(this.keys[index] == undefined){
            return [false, null];
        }
        else {
            let new_index = this.rehash(index);
            while(new_index != index && this.keys[new_index] != key && this.keys[new_index] != undefined){
                new_index = this.rehash(new_index);
            }  
            if(this.keys[new_index] == key){
                return [true, new_index];
            }
            else {
                return [false, null];
            } 
        }
    }

    size(){
        return this.length;
    }

    hash(key){
        return key % this.capacity;
    }

    rehash(oldKey){
        return (oldKey + 1) % this.capacity;
    }
}



let ht = new HashTable();
ht.put(11, 'string 11');
ht.put(22, 'string 22');
ht.put(33, 'string 33');
ht.put(44, 'string 44');

ht.put(21, 'string 21');
ht.put(12, 'string 12');

console.log(ht.keys);
console.log(ht.values);
console.log(ht.size());
console.log('Get 11', ht.get(11));
console.log('Get 22', ht.get(22));
console.log('Get 147', ht.get(147));
console.log('----------------------------------------');

console.log('Contains 22', ht.contains(22));
ht.delete(22);
console.log(ht.size());
console.log(ht.keys);
console.log(ht.values);
console.log('Contains 22', ht.contains(22));
console.log('----------------------------------------');

console.log('Contains 44', ht.contains(44));
console.log(ht.keys);
console.log(ht.values);
console.log('Contains 77', ht.contains(77));
ht.put(44, 'string 144');
ht.put(77, 'string 77');

console.log(ht.size());
console.log(ht.keys);
console.log(ht.values);
console.log('Contains 77', ht.contains(77));
console.log('Contains 44', ht.contains(44));
