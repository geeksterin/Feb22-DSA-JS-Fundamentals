/**
 * Sort a given list without using any extra
 * space
 */

function heapSort(arr) {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let heap = [];
    const heapifyUp = () => {
        if (!heap.length) {
            return;
        }

        let curr = heap.length - 1;
        let parent = Math.floor((curr - 1)/2);
        while () {
            // todo:
        }
    }

    const insert = (num) => {
        heap.push(num);
        heapifyUp();
    }


    const heapifyDown = () => {
        let curr = 0;
        let leftChild = 2 * curr + 1;
        let rightChild = 2 * curr + 2;

        while () {
            // todo:
        }
    }

    const removeMin = () => {
        swap(heap, 0, heap.length - 1);
        let removed = heap.pop();
        heapifyDown();

        return removed;
    }

    let result = [];
    while (heap.length) {
        result.push(removeMin());
    }

    return result;
}
