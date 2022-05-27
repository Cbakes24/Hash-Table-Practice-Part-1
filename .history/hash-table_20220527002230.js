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
    let shaHash = sha256(key).slice(0, 8);
    return parseInt("0x" + shaHash);
    //
    // let hashValue = 0;
    // for (let i = 0; i < key.length; i++) {
    // hashValue += key.charCodeAt(i);
    // }
    // return hashValue;
  }

  hashMod(key) {
    // accessing the index after hashing
    return this.hash(key) % this.data.length;

    // Option 2

    // return this.hash(key) % this.capacity;
  }

  // Add To Head Implementation

  // Hash Table with collisions (pt. 4)
  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key);
    let newPair = new KeyValuePair(key, value);

    if (this.data[index]) {
      newPair.next = this.data[index];
    }

    this.data[index] = newPair;
    this.count++;
  }

  // Hash Table with no collisions (pt. 3)
  insert(key, value) {
    const newValInstance = new KeyValuePair(key, value);
    let index = this.hashMod(newValInstance.key);
    let dataBucket = this.data[index];

    newValInstance.next = dataBucket;
    this.data[index] = newValInstance;
    this.count += 1;

    //ALT METHOD
    // const hashMod = this.hashMod(key);
    // let hash = new KeyValuePair(key, value);
    // if (this.data[hashMod]) {
    //   hash.next = this.data[hashMod];
    //   this.count += 1;
    //   this.data[hashMod] = hash;
    // } else {
    //   this.count += 1
    //   this.data[hashMod] = hash
    // }
  }
}

module.exports = HashTable;
