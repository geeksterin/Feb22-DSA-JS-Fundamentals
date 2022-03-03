/**
 * Algorithm : Swap adjacent elements until the array is sorted
 */

let step = 0;

function bubbleSort(arr) {
    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = 0; j <= arr.length - 2; j++) {
            ++step;
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

let testArray = [-2, 45, 0, 11, -9]
console.log('original array', testArray);
bubbleSort(testArray);
console.log('sorted array', testArray, 'in', step, 'steps');

function bubbleSortOptimized(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i-1; j++) {
            ++step;
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

testArray = [-2, 45, 0, 11, -9]
step = 0;
console.log('original array', testArray);
bubbleSortOptimized(testArray);
console.log('sorted array', testArray, 'in', step, 'steps');



