class HashMap {
  constructor(arraySize) {
    this.bucketArray = Array(arraySize);
    this.length = 0;
    this.loadFactor = 0.75;
    this.arraySize = arraySize;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.bucketArray.length;
    }

    return hashCode;
  }

  set(key, value) {
    const bucketIndex = this.hash(key);
    if (!this.bucketArray[bucketIndex]) {
      this.bucketArray[bucketIndex] = [];
    }
    for (let pair of this.bucketArray[bucketIndex]) {
      if (pair[0] === key) {
        pair[1] = value;

        return;
      }
    }
    this.bucketArray[bucketIndex].push([key, value]);
    this.length++;

    if (this.length > this.loadFactor * this.arraySize) {
      this.resize();
    }
  }

  get(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.bucketArray[bucketIndex];
    if (bucket) {
      for (let pair of bucket) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.bucketArray[bucketIndex];

    if (!bucket) return false;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.length--;

        if (bucket.length === 0) {
          this.bucketArray[bucketIndex] = null;
        }
        return true;
      }
    }
    return false;
  }

  getLength() {
    return this.length;
  }

  clear() {
    this.bucketArray = Array(this.arraySize);
    this.length = 0;
  }

  keys() {
    const keys = [];
    for (let bucket of this.bucketArray) {
      if (bucket) {
        for (let pair of bucket) {
          keys.push(pair[0]);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let bucket of this.bucketArray) {
      if (bucket) {
        for (let pair of bucket) {
          values.push(pair[1]);
        }
      }
    }
    return values;
  }

  enteries() {
    const enteries = [];
    for (let bucket of this.bucketArray) {
      if (bucket) {
        for (let pair of bucket) {
          enteries.push(pair);
        }
      }
    }
    return enteries;
  }

  resize() {
    console.log("Resizing...");
    const oldBucketArray = this.bucketArray;
    this.bucketArray = new Array(this.arraySize * 2);
    this.arraySize = this.bucketArray.length;
    this.length = 0;

    for (let bucket of oldBucketArray) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  indexError(index) {
    if (index < 0 || index >= this.bucketArray.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
}

module.exports = HashMap;
