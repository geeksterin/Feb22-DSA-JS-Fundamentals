function swap(arr, from, to) {
    console.log('swapping', arr[from], arr[to]);
    let tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;

    return arr;
}

/**
 * [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
 * l = 0, h = 9, pivotIdx = 9, i = j = l = 0
 * swap(5, 9) => [5, 7, 9, 11, 12, 2, 14, 3, 10, 6], i=1
 * swap(2,7) => [5, 2, 9, 11, 12, 7, 14, 3, 10, 6], i=2
 * swap(3,9) => [5, 2, 3, 11, 12, 7, 14, 9, 10, 6], i=3
 * swap(6,11) => [5, 2, 3, 6, 12, 7, 14, 9, 10, 11]
 */
function partition(arr, l, h) {
    let pivotIdx = h;
    let i = l, j = l;
    console.log('pivot element', arr[pivotIdx]);
    while (j < h) {
        if (arr[pivotIdx] > arr[j]) {
            swap(arr, i, j);
            i++;
        }
        j++;
    }
    swap(arr, pivotIdx, i);
    console.log('after partitioning', arr);
    return i;
}

function quickSort(arr, l, h) {
    let pivot;
    if (l < h) {
        pivot = partition(arr, l, h);
        quickSort(arr, l, pivot - 1);
        quickSort(arr, pivot + 1, h);
    }
}

function sort(arr) {
    quickSort(arr, 0, arr.length - 1);
}

let testArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log('input arr', testArray);
console.log('input arr size', testArray.length);

sort(testArray);
console.log('sorted input', testArray);
