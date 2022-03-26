/**
 * Find the next greater element for every number in the given array
 *  [4, 5, 2, 25, 20]
 *  4  -  5
 *  5  - 25
 *  2  - 25
 *  25 - -1
 *  20 - -1
 */

/**
 * use nested for loops and for every element, find the next greater element
 *
 * time complexity - O(n*n)
 */

/**
 *
 */
class Stack {
    #data;

    constructor() {
        this.#data = [];
    }

    push(value) {
        this.#data.push(value);
    }

    /**
     * Lets us look at the top element of the stack
     */
    peek() {
        if (this.#data.length === 0) {
            return null;
        }
        return this.#data[this.#data.length - 1];
    }

    pop() {
        return this.#data.pop();
    }

    size() {
        return this.#data.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#data = [];
    }

    print() {
        console.log(this.#data);
    }
}
function printNextGreaterElement(arr) {
    let stack = new Stack();

    for (let i = 0; i < arr.length; i++) {
        if (stack.peek() && stack.peek() < arr[i]) {
            while (!stack.isEmpty() && stack.peek() < arr[i]) {
                console.log(stack.pop(), '-', arr[i]);
            }
        }
        stack.push(arr[i]);
    }

    while(!stack.isEmpty()) {
        console.log(stack.pop(), '- -1');
    }
}

printNextGreaterElement([4, 5, 2, 25, 20]);

// todo: fix the program to print the output in insertion order
