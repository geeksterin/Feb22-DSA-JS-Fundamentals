/**
 * Write linear search using recursion
 */
// iteration
function linearSearch(arr, numberToBeSearched) {
    // look thru every el of the arr
    let i = 0;
    for(i = 0; i <= arr.length-1; i++) {
        if (numberToBeSearched === arr[i]) {
            return true;
        }
    }
    return false;
}

// recursion
// 1. Identify the base case
//    found = arr[0] === numberToBeSearched ||
//                          linearSearch(arr.slice(1), numberToBeSearched)
function linearSearchR(arr, numberToBeSearched) {
    console.log('current array', arr);
    if (arr.length === 0) {
        return false;
    }
    console.log(
        'arr[0]:', arr[0],
        'num', numberToBeSearched,
        'are they equal', arr[0] === numberToBeSearched
    );
    if (arr[0] === numberToBeSearched) {
        return true;
    }
    return linearSearchR(arr.slice(1), numberToBeSearched);
}
array_test = [-10, 2, 3, 5, 7, 8];
console.log(linearSearchR(array_test, 5));
// >> true
console.log('-----------');
console.log(linearSearchR(array_test, 10));
// >> false

