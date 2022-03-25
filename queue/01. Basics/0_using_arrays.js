class Queue {
    #list;
    #front;
    #rear;

    constructor() {
        this.#list = [];
        this.#front = 0;
        this.#rear = 0;
    }

    enqueue(val) {
        this.#list.push(val);
        this.#rear++;
    }

    dequeue() {
        let dequeuedEl = this.#list[this.#front];
        delete this.#list[this.#front];
        this.#front++;
        return dequeuedEl;
    }

    getFront() {
        return this.#list[this.#front];
    }

    size() {
        return this.#list.length - this.#front;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#list = [];
        this.#front = 0;
        this.#rear = 0;
    }

    print() {
        console.log('front ->', this.#list, '<- rear')
    }
}

let q = new Queue();
console.log('size of q', q.size());
q.enqueue(18);
q.enqueue(7);
q.print();
q.enqueue(9);
q.enqueue(12);
q.print();
console.log('size of q', q.size());
console.log('getting front', q.getFront());
console.log('dequeuing', q.dequeue());
q.print();
console.log('size of q', q.size());
console.log('getting front', q.getFront());
q.enqueue(20);
q.print();
console.log('getting front', q.getFront());
console.log('size of q', q.size());


