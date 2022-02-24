let array_test = [-10, 2, 5, 8, 7, 3];

// I want the 5th element of this array
console.log(array_test[5]);
// >> 3


/**
 * i =0 ---> i < arr.length
 * increment = 1
 * arr.length = 6
 * max(i can reach up to) = 5
 * This means i < arr.length is equivalent to i <= arr.length - 1
 * @param arr
 * @param numberToBeSearched
 */
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

array_test = [-10, 2, 3, 5, 7, 8];
console.log(linearSearch(array_test, 5));
// >> true
console.log(linearSearch(array_test, 10));
// >> false
