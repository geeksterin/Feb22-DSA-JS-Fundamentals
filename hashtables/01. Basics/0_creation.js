/**
 * What is a hash table-
 * - map keys to values
 * - Helps us perform insertions, access and removal in constant time.
 *
 * A hash table mainly contains 2 parts
 * - Hashing function - This function converts keys to indexes where values are stored
 * - Object - this is the actual table where values are stored [table is implemented generally using arrays]
 *
 *
 * Hash functions-
 *  - Modulus function -
 *      index = key MOD tablesize
 *         => This ensures that index lies
 *            between 0 & tablesize - 1
 *
 * - Trunction -
 *      We select a part of the key and
 *      then perform the mod
 *
 * - Folding -
 *      We divide our key into smaller chunks and then apply
 *      different math operation/arithmetic operation
 *
 * Hash Collision-
 *  - When hash function returns same index for multiple keys
 *
 *  Handling hash collisions:
 *
 *  1. Linear probing:
 *      Skipping indexes to avoid collision
 *      Downside is we overwrite stuff
 *          or we may leave a lot of keys empty
 *
 *  2. Chaining:
 *      In case of a collision, start a linked list or a tree
 *      at the collision index.
 *
 *  3. Resizing the table
 *      In case of a collision, increase the table size.
 *      Generally a threshold of 60% is used.
 *
 *  4. Double Hashing:
 *       First, we calculate the index using a hash function
 *       And then, we calculate the offset using a hash function
 *
 */

/**
 * Hash table implementation which will have string keys
 */
class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    }

    generateHash(key) {
        return key.toString().length % this.size;
    }

    insert(key, value) {
        const hash = this.generateHash(key);
        console.log('hash:', hash);
        if (!this.values[hash]) {
            this.values[hash] = {};
        }

        if (!this.values[hash][key]) {
            this.length++;
        }

        this.values[hash][key] = value;
    }

    get(key) {
        const hash = this.generateHash(key);
        return this.values[hash]?.[key];
    }

    remove(key) {
        const hash = this.generateHash(key);

        const val = this.get(key);
        if (val) {
            this.length--;
            delete this.values[hash][key];
        }

        return val;
    }
}

let ht = new HashTable();
ht.size = 10;
ht.insert('city1', 'delhi');
ht.insert('city2', 'mumbai');
ht.insert('fav-fruit', 'apple');
ht.insert('city2', 'kolkata');

console.log(ht);

console.log('get city1: ', ht.get('city1'));
console.log('get city2: ', ht.get('city2'));
console.log('get fav-fruit: ', ht.get('fav-fruit'));
console.log('get city4: ', ht.get('city4'));

console.log('remove city1', ht.remove('city1'));
console.log(ht);

