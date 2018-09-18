/**
Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LFUCache cache = new LFUCache( 2  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity=capacity;
  this.cache=[];
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(k) {
 for (let i=0;i< this.cache.length;i++){
  if(this.cache[i].key===k){
    let val=this.cache[i].val;
    this.cache[i].freq=this.cache[i].freq+1;
    this.cache[i].rec++;
    this.order(this.cache);
    return val;
  }
 }
 return -1;
};

LFUCache.prototype.order = (cache) =>{
  cache.sort((a,b)=>b.freq-a.freq);
}
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.cache.length===this.capacity){
    this.cache.shift();
  }
  var c={key:key,val:value,freq:1,rec:1}
  this.cache.push(c);
  this.order(this.cache);

};

let cache = new LFUCache( 2  );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.cache);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
console.log(cache.get(1));       // returns -1 (not found)
cache.get(3);       // returns 3
let result=cache.get(4);       // returns 4
console.log(cache.cache);
console.log(result);
