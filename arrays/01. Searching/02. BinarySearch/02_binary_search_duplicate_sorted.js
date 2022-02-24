let sorted_array_test = [-10, 2, 2, 2, 3, 5, 5, 7, 8, 9];
let target = 10;

function binarySearchLastOccurrence(arr, numberToBeSearched) {
    let l = 0;
    let u = arr.length - 1;
    let mid = l + (u - l)/2
    let result = -1;

    while(l <= u) {
        mid = Math.floor(l + (u - l)/2);
        // console.log('l', l, 'u', u, 'mid', mid);
        if (arr[mid] === numberToBeSearched) {
            result = mid;
            l = mid + 1;
            // return mid;
        }
        if (arr[mid] < numberToBeSearched) {
            l = mid + 1;
        } else if (arr[mid] > numberToBeSearched) {
            u = mid - 1;
        }
    }

    return result;
}

function binarySearchFirstOccurrence(arr, numberToBeSearched) {
    let l = 0;
    let u = arr.length - 1;
    let mid = l + (u - l)/2
    let result = -1;

    while(l <= u) {
        mid = Math.floor(l + (u - l)/2);
        // console.log('l', l, 'u', u, 'mid', mid);
        if (arr[mid] === numberToBeSearched) {
            result = mid;
            u = mid - 1;
            // return mid;
        }
        if (arr[mid] < numberToBeSearched) {
            l = mid + 1;
        } else if (arr[mid] > numberToBeSearched) {
            u = mid - 1;
        }
    }

    return result;
}

sorted_array_test = [-10, 2, 2, 2, 3, 5, 5, 7, 8, 9];
console.log('number exists b/w index',
    binarySearchFirstOccurrence(sorted_array_test, 9), '-',
    binarySearchLastOccurrence(sorted_array_test, 9));
console.log('number exists b/w index',
    binarySearchFirstOccurrence(sorted_array_test, 2), '-',
    binarySearchLastOccurrence(sorted_array_test, 2));

/*
number exists b/w index 1 - 3
    number of occurrence = (last - first) + 1
 */



console.log('number exists b/w index',
    binarySearchFirstOccurrence(sorted_array_test, 5), '-',
    binarySearchLastOccurrence(sorted_array_test, 5));
