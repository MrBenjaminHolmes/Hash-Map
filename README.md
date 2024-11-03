# Hash-Map 🗝️

## Features

### Core Methods

- **`hash(key)`**:  
  Converts a `string` key into a hash code (integer). The hash code is used to determine the index of the bucket where the key-value pair will be stored. This function helps distribute entries evenly across buckets.

- **`set(key, value)`**:  
  Inserts a key-value pair into the hash map. If the key already exists, this function updates the value. The function dynamically resizes the hash map if the load factor threshold is exceeded.

- **`get(key)`**:  
  Retrieves the value associated with the provided key. If the key does not exist in the hash map, it returns `null`.

- **`has(key)`**:  
  Checks if the hash map contains the specified key. Returns `true` if the key is found, otherwise returns `false`.

- **`remove(key)`**:  
  Removes the key-value pair associated with the specified key. Returns `true` if the key was found and removed, otherwise returns `false`.

- **`length()`**:  
  Returns the total number of key-value pairs stored in the hash map.

- **`clear()`**:  
  Removes all entries from the hash map, effectively resetting it.

- **`keys()`**:  
  Returns an array containing all the keys present in the hash map.

- **`values()`**:  
  Returns an array containing all the values associated with the keys in the hash map.

- **`entries()`**:  
  Returns an array of arrays, where each inner array contains a key-value pair (e.g., `[[key1, value1], [key2, value2]]`).
