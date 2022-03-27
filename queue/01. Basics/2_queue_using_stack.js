/**
 * Implement a queue using stack
 * - consider that either enqueue or dequeue operation can take O(n)
 *   time.
 *
 *   Input = q2, q3, q4, d, d, q5, q6, d
 *
 *   When queueing, push elements in s2 - O(1)
 *   When dequeueing,
 *      - if s1 is empty -> pop all elements from s2 and push in s1 - pop s1 -> O(n)
 *      - if s1 is not empty -> pop from s1 -> O(1)
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

class QueueWithStack {
    #s1;
    #s2;

    constructor() {
        this.#s1 = new Stack();
        this.#s2 = new Stack();
    }

    enqueue(val) {
        this.#s2.push(val);
    }


    dequeue() {
        if(this.#s1.isEmpty()) {
            if (this.#s2.isEmpty()) {
                return null;
            }
            while(!this.#s2.isEmpty()) {
                this.#s1.push(this.#s2.pop());
            }
        }

        return this.#s1.pop();
    }

    size() {
        return this.#s1.size() + this.#s2.size();
    }

    prints1() {
        this.#s1.print();
    }

    prints2() {
        this.#s2.print();
    }
}

let q = new QueueWithStack();

q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.enqueue(4);

q.prints1();
q.prints2();

