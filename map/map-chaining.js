
class KeyValue {

    constructor(key, value){
        this.key = key;
        this.value = value;
    }

}

class HashTable {

    constructor(capacity = 11){
        this.capacity = capacity;
        this.items = new Array(this.capacity);
        this.length = 0;
    }

    put(key, value){
        let index = this.hash(key);
        if(this.items[index] == undefined){
            this.items[index] = [new KeyValue(key, value)];
            this.length++;
        }
        else {
            let items = this.items[index];
            let i = 0;
            let found = false;
            while(i < items.length && !found){
                if(items[i].key == key){
                    found = true;
                }
                else{
                    i++;
                }
            }
            if(found){
                items[i].value = value;
            }
            else{
                items.push(new KeyValue(key, value));
                this.length++;
            }
        }
    }

    get(key){
        let index = this.hash(key);
        if(this.items[index] == undefined){
            return null;
        }
        else {
            let items = this.items[index];
            let i = 0;
            let found = false;
            while(i < items.length && !found){
                if(items[i].key == key){
                    found = true;
                }
                else{
                    i++;
                }
            }
            if(found){
                return items[i].value;
            }
            return null;
        }
    }

    delete(key){
        let index = this.hash(key);
        if(this.items[index] == undefined){
            return;
        }
        else {
            let items = this.items[index];
            let i = 0;
            let found = false;
            while(i < items.length && !found){
                if(items[i].key == key){
                    found = true;
                }
                else{
                    i++;
                }
            }
            if(found){
                this.items[index] = items.filter(item => item.key != key);
                this.length--;
            }
            
        }
    }

    contains(key){
        let index = this.hash(key);
        if(this.items[index] == undefined){
            return false;
        }
        else {
            let items = this.items[index];
            let i = 0;
            let found = false;
            while(i < items.length && !found){
                if(items[i].key == key){
                    found = true;
                }
                else{
                    i++;
                }
            }
            if(found){
                return true;
            }
            return false;
        }
    }

    size(){
        return this.length;
    }

    hash(key){
        return key % this.capacity;
    }

}



let ht = new HashTable();
ht.put(11, 'string 11');
ht.put(22, 'string 22');
ht.put(33, 'string 33');
ht.put(44, 'string 44');

ht.put(21, 'string 21');
ht.put(12, 'string 12');



console.log(ht.size());
console.log('Get 11', ht.get(11));
console.log('Get 22', ht.get(22));
console.log('Get 147', ht.get(147));
console.log('----------------------------------------');

console.log('Contains 22', ht.contains(22));
ht.delete(22);
console.log(ht.size());


console.log('Contains 22', ht.contains(22));
console.log('----------------------------------------');

console.log('Contains 44', ht.contains(44));


console.log('Contains 77', ht.contains(77));
ht.put(44, 'string 144');
ht.put(77, 'string 77');

console.log(ht.size());


console.log('Contains 77', ht.contains(77));
console.log('Contains 44', ht.contains(44));
