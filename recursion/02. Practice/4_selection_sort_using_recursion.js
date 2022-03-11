function findMinIdx(arr, index) {
    if (index === arr.length - 1) {
        return index;
    }

    let min = findMinIdx(arr, index + 1);

    if (arr[min] > arr[index]) {
        return index;
    } else {
        return min;
    }
}

testArray = [-2, 45, -9, 0, 11];
        /*
            [-9, 45, -2, 0, 11]
            [-9, 45, -2, 0, 11]
            [-9, -2, 45, 0, 11]
         */
console.log(findMinIdx(testArray, 0));

function swap(arr, from, to) {
    let tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;

    return arr;
}

/**
 * Write selection sort using recursion
 */
function selectionSortR(arr, low, high) {
    if (low === high) {
        return;
    }

    let nextMinIdx = findMinIdx(arr, low);
    swap(arr, low, nextMinIdx);
    console.log('swapping', arr[low], arr[nextMinIdx]);
    console.log(arr);
    selectionSortR(arr, low + 1, high);
}

function selectionSort(arr) {
    selectionSortR(arr, 0, arr.length - 1);
}

console.log('original array', testArray)
selectionSort(testArray);
console.log('sorted array', testArray);


