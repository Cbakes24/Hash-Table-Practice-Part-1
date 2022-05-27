const sha256 = require("js-sha256");

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0; //initializing the array where the array is implemented as a hash table
    this.capacity = numBuckets; // setting the size array
    this.data = new Array(numBuckets).fill(null); //slots in the array are the 'buckets' and we've initialized each one to 'null'
  }

  hash(key) {
    let hashValueSha = sha256(key).slice(0, 8);
    return parseInt("0x" + hashValueSha);
    //
    // let hashValue = 0;
    // for (let i = 0; i < key.length; i++) {
    // hashValue += key.charCodeAt(i);
    // }
    // return hashValue;
  }

  hashMod(key) {
    // accessing the index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // fill this in
  }
}

module.exports = HashTable;
