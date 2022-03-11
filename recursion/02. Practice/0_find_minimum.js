/**
 * Given an array, find the minimum in that array using recursion
 * min variable
 * [start from the beginning........end]
 * let min = arr[0];
 * for(let i=0; i< arr.length; i++) {
 *     if (arr[i] < min) {
 *          min = arr[i];
 *     }
 * }
 *
 */
function findMinimum(arr, index) {
    if (index === arr.length - 1) {
        return arr[index];
    }

    let min = findMinimum(arr, index + 1);

    if (min > arr[index]) {
        return arr[index];
    } else {
        return min;
    }
}

function findMinimumUsingRecursion(arr) {
    return findMinimum(arr, 0);
}

let arrayTest = [2, 4, -10, 20, 5];
console.log(findMinimumUsingRecursion(arrayTest) === -10);
console.log(findMinimumUsingRecursion(arrayTest) === 2);
