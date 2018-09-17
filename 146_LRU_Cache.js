/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:
LRUCache cache = new LRUCache( 2 );


cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

class LRUCache extends Map{
    constructor(capacity){
      super();
      this.capacity=capacity;
    }

    get(key){
      if (this.has(key)){
          let val=super.get(key);
          this.delete(key,val);
          this.set(key,val);
          return val;
        } else return -1;
    }

    put(key,val){
      if(this.has(key) || this.size<this.capacity){
        this.get(key);
        this.set(key,val);
      } else {
          this.delete(this.keys().next().value);//delete the first key in the LRUCache map
          this.set(key,val);
      }
    }
}

let cache = new LRUCache(2);

cache.put(1, 10);
cache.put(2, 20);
cache.get(1);       // returns 1
cache.put(3, 38);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 42);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
console.log(cache.get(4));       // returns 4