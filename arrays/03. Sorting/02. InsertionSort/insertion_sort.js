/**
 * Algorithm: Iterate thru the array and place every number in its correct position in
 *              the left subarray
 */

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j;
        for (j = i-1; j >= 0; j--) {
            if (arr[j] > currentElement) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = currentElement;
    }
}

testArray = [-2, 45, 0, 11, -9]
step = 0;
console.log('original array', testArray);
insertionSort(testArray);
console.log('sorted array', testArray);

// todo: use a while loop for swapping or include the if conditions in the for statement itself
