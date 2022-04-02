/**
 * MinHeap: The parent node is always less than the child nodes.
 * MaxHeap: The parent node is always greater than or equal to the child nodes.
 */

let arr = [10, 23, 36, 32, 38, 45, 57]

/**
 * d= 0 -> N ;
 *  current node is at arr[d],
 *  left node is at arr[2*d + 1]
 *  right node is at arr[2*d + 2]
 */

class MinHeapUsingArrays {
    constructor() {
        this.heap = [null];
    }

    getMin() {
        return this.heap[1];
    }

    /**
     * time complexity of addition in min heap: log n
     *
     */
    add(data) {
        this.heap.push(data);
        this.#heapify();
    }

    #heapify() {
        if (this.heap.length > 1) {
            let curr = this.heap.length - 1;
            while (curr > 1 &&
            this.heap[Math.floor(curr / 2)] > this.heap[curr]) {

                [this.heap[Math.floor(curr / 2)], this.heap[curr]]
                    = [this.heap[curr], this.heap[Math.floor(curr / 2)]];
                curr = Math.floor(curr / 2);
            }
        }
    }

    print() {
        console.log('min-heap:', this.heap);
    }
}

let inputArr = [23, 32, 38, 10, 36, 45, 57];
let minHeap = new MinHeapUsingArrays();
for (let i = 0; i < inputArr.length; i++) {
    minHeap.add(inputArr[i]);
    minHeap.print();
}

class MaxHeapUsingArrays {
    constructor() {
        this.heap = [null];
    }

    getMax() {
        return this.heap[1];
    }

    /**
     * time complexity of addition in min heap: log n
     *
     */
    add(data) {
        this.heap.push(data);
        this.#heapify();
    }

    #heapify() {
        if (this.heap.length > 1) {
            let curr = this.heap.length - 1;
            while (curr > 1 &&
            this.heap[Math.floor(curr / 2)] < this.heap[curr]) {

                [this.heap[Math.floor(curr / 2)], this.heap[curr]]
                    = [this.heap[curr], this.heap[Math.floor(curr / 2)]];
                curr = Math.floor(curr / 2);
            }
        }
    }

    print() {
        console.log('max-heap:', this.heap);
    }
}

inputArr = [23, 32, 38, 10, 36, 45, 57];
let maxHeap = new MaxHeapUsingArrays();
for (let i = 0; i < inputArr.length; i++) {
    maxHeap.add(inputArr[i]);
    maxHeap.print();
}


