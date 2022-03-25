
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

let stack = new Stack();
console.log('is stack empty', stack.isEmpty());
stack.peek();
stack.push(1);
stack.push(2);
console.log('top', stack.peek());
console.log('popped element', stack.pop());
console.log('top', stack.peek());
stack.push(10);
stack.push(4);

stack.print();

console.log('top', stack.peek());
console.log('is stack empty', stack.isEmpty());
stack.push(14);

console.log('top', stack.peek());
stack.clear()
console.log('is stack empty', stack.isEmpty());

// TODO: build stack using array and not using push & pop methods
