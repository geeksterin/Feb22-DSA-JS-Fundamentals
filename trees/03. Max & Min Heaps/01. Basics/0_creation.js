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
        this.#heapifyUp();
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] =
            [arr[idx2], arr[idx1]];
    }

    #heapifyUp() {
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

    /**
     * 1. Swap the root node with the last node
     * 2. Remove it from the heap.
     * 3. If root node after swap is greater than its child
     *      - find the smaller of the children
     *      - swap the root node with smaller child
     *      - Repeat step 3 until it's a valid min-heap
     *        (current node is smaller than the child nodes)
     */
    remove() {
        let current = 1;
        let lastNodeIdx = this.heap.length - 1;
        this.swap(this.heap, current, lastNodeIdx);

        let minimum  = this.heap.pop();
        this.#heapifyDown(current);

        return minimum;
    }

    #heapifyDown(current) {
        let leftIdx = 2 * current;
        let rightIdx = 2 * current + 1;
        while (current < this.heap.length &&
        (this.heap[current] > this.heap[leftIdx] ||
            this.heap[current] > this.heap[rightIdx]) &&
        leftIdx < this.heap.length && rightIdx < this.heap.length) {
            if (this.heap[rightIdx] > this.heap[leftIdx]) {
                this.swap(this.heap, current, leftIdx);
                current = leftIdx;
            } else if (this.heap[leftIdx] > this.heap[rightIdx]) {
                this.swap(this.heap, current, rightIdx);
                current = rightIdx;
            }

            leftIdx = 2 * current;
            rightIdx = 2 * current + 1;
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
    // minHeap.print();
}
// minHeap.print();
// console.log('removed element', minHeap.remove());
// minHeap.print();
//
// console.log('removed element', minHeap.remove());
// minHeap.print();






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
        this.#heapifyUp();
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] =
            [arr[idx2], arr[idx1]];
    }

    #heapifyUp() {
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

    remove() {
        let current = 1;
        let lastNodeIdx = this.heap.length - 1;
        this.swap(this.heap, current, lastNodeIdx);

        let maximum  = this.heap.pop();
        this.#heapifyDown(current);

        return maximum;
    }

    #heapifyDown(current) {
        let leftIdx = 2 * current;
        let rightIdx = 2 * current + 1;
        while (current < this.heap.length &&
            this.isCurrentLessThanChildren(current, leftIdx, rightIdx) &&
            leftIdx < this.heap.length && rightIdx < this.heap.length) {
            if (this.heap[rightIdx] < this.heap[leftIdx]) {
                this.swap(this.heap, current, leftIdx);
                current = leftIdx;
            } else if (this.heap[leftIdx] < this.heap[rightIdx]) {
                this.swap(this.heap, current, rightIdx);
                current = rightIdx;
            }

            leftIdx = 2 * current;
            rightIdx = 2 * current + 1;
        }
    }

    isCurrentLessThanChildren(current, leftIdx, rightIdx) {
        return this.heap[current] < this.heap[leftIdx] || this.heap[current] < this.heap[rightIdx];
    }

    print() {
        console.log('max-heap:', this.heap);
    }
}

inputArr = [23, 32, 38, 10, 36, 45, 57];
let maxHeap = new MaxHeapUsingArrays();
for (let i = 0; i < inputArr.length; i++) {
    maxHeap.add(inputArr[i]);
}
maxHeap.print();
console.log('removed element', maxHeap.remove());
maxHeap.print();

console.log('removed element', maxHeap.remove());
maxHeap.print();


