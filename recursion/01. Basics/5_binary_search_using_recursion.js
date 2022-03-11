function binarySearch(arr, numberToBeSearched) {
    let l = 0;
    let u = arr.length - 1;
    let mid = l + (u - l)/2

    while(l <= u) {
        let mid = Math.floor(l + (u - l)/2);
        if (arr[mid] === numberToBeSearched) {
            return true;
        }
        if (arr[mid] < numberToBeSearched) {
            l = mid + 1;
        } else {
            u = mid - 1;
        }
    }

    return false;
}
sorted_array_test = [-10, 2, 3, 5, 7, 8, 9];
console.log(sorted_array_test);
console.log(5, 'number exists', binarySearch(sorted_array_test, 9));
console.log(10, 'number exists - binary search', binarySearch(sorted_array_test, 10));

/**
 * binary search using recursion
 */
function binarySearchR(arr, numberToBeSearched, low, high) {
    if (low > high) {
        return false;
    }
    let mid = Math.floor(low + (high - low)/2);
    if (arr[mid] === numberToBeSearched) {
        return true;
    }
    if (arr[mid] > numberToBeSearched) {
        return binarySearchR(
            arr, numberToBeSearched, low, mid - 1);
    } else {
        return binarySearchR(
            arr, numberToBeSearched, mid + 1, high);
    }
}
console.log('--------binary search with recursion--------');
sorted_array_test = [-10, 2, 3, 5, 7, 8, 9];
console.log(sorted_array_test);
console.log(5, 'number exists', binarySearchR(
    sorted_array_test, 9, 0, sorted_array_test.length - 1));
console.log(10, 'number exists - binary search', binarySearch(
    sorted_array_test, 10, 0, sorted_array_test.length - 1));
