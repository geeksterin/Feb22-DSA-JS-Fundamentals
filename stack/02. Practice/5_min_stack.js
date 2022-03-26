/**
 * Implement a stack in which there's another option called getMin()
 * - getMin() : returns the minimum element till that number
 * - getMin() : should also work in O(1) along with push() & pop()
 */

// class Node {
//     constructor(data, min ) {
//         this.data = data;
//         this.min = min;
//     }
// }
// // space complexity - Worst case - O(n) , Average case - O(n)
// class Stack {
//     #data;
//
//     constructor() {
//         this.#data = [];
//     }
//
//     getMin() {
//         return this.peek()?.min;
//     }
//
//     push(value) {
//
//         let node = new Node(
//             value,
//             this.peek() ? Math.min(value, this.getMin()) : value
//         );
//         this.#data.push(node);
//     }
//
//     /**
//      * Lets us look at the top element of the stack
//      */
//     peek() {
//         if (this.#data.length === 0) {
//             return null;
//         }
//         return this.#data[this.#data.length - 1];
//     }
//
//     pop() {
//         return this.#data.pop();
//     }
//
//     size() {
//         return this.#data.length;
//     }
//
//     isEmpty() {
//         return this.size() === 0;
//     }
//
//     clear() {
//         this.#data = [];
//     }
//
//     print() {
//         console.log(this.#data);
//     }
// }
//
// let stack = new Stack();
// stack.push(10);
// console.log(stack.getMin() === 10);
// stack.push(5);
// console.log(stack.getMin() === 5);
// stack.push(12);
// console.log(stack.getMin() === 5);
// stack.push(3);
// console.log(stack.getMin() === 3);
// stack.push(11);
// console.log(stack.getMin() === 3);
// stack.print();
//
// for (let i = 10; i < 100; i++) {
//     stack.push(i);
// }
// stack.print();

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

class MinStack {
    #stack;
    #minTrackingStack;

    constructor() {
        this.#stack = new Stack();
        this.#minTrackingStack = new Stack();
    }

    push(value) {
        this.#stack.push(value);
        if (!this.#minTrackingStack.peek()
                || this.#minTrackingStack.peek() >= value) {
            this.#minTrackingStack.push(value);
        }
    }

    pop() {
        let popped = this.#stack.pop();
        if (popped === this.#minTrackingStack.peek()) {
            this.#minTrackingStack.pop();
        }
        return popped;
    }

    print() {
        console.log('data stack');
        this.#stack.print();
        console.log('min tracking stack');
        this.#minTrackingStack.print();
    }

    getMin() {
        return this.#minTrackingStack.peek();
    }
}

let stack = new MinStack();

stack.push(10);
console.log(stack.getMin() === 10);
stack.push(5);
console.log(stack.getMin() === 5);
stack.push(12);
console.log(stack.getMin() === 5);
stack.push(3);
console.log(stack.getMin() === 3);
stack.push(11);
console.log(stack.getMin() === 3);
stack.print();

for (let i = 10; i < 100; i++) {
    stack.push(i);
}
stack.print();
console.log(stack.getMin() === 3);
