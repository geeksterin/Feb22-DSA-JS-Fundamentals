/**
 * Algorithm: Starting from left, find the minimum number in the right subarray
 *              and then place it in the current index in the array.
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentMin = arr[i];
        let minIndex = i;
        // find the min starting from i+1
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < currentMin) {
                currentMin = arr[j];
                minIndex = j;
            }
        }
        // swap arr[i] with min
        let tmp = arr[i];
        arr[i] = currentMin;
        arr[minIndex] = tmp;
    }
}

testArray = [-2, 45, 0, 11, -9];
console.log('original array', testArray);
selectionSort(testArray);
console.log('sorted array', testArray);

// TODO: check if this program can be improved (reduce number of iterations)
