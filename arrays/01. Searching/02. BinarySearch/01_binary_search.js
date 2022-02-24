let sorted_array_test = [-10, 2, 3, 5, 7, 8, 9];
let target = 10;
//
// mid = 5
// 5<10
//     [ 7, 8, 9]
//
//
//             number of comparisons
// linear search -     6
// binary_search -     3

// console.log(sorted_array_test[Math.floor(6/2)]);

function linearSearch(arr, numberToBeSearched) {
    // look thru every el of the arr
    let i = 0;
    for(i = 0; i <= arr.length-1; i++) {
        console.log('current', arr[i]);
        if (numberToBeSearched === arr[i]) {
            return true;
        }
    }
    return false;
}

function binarySearch(arr, numberToBeSearched) {
    let l = 0;
    let u = arr.length - 1;
    let mid = l + (u - l)/2

    while(l <= u) {
        let mid = Math.floor(l + (u - l)/2);
        console.log('l', l, 'u', u, 'mid', mid);
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
console.log('number exists', binarySearch(sorted_array_test, 9));
console.log('number exists - linear search', linearSearch(sorted_array_test, 10));
console.log('number exists - binary search', binarySearch(sorted_array_test, 10));
sorted_array_test = [-10, 2, 3, 5, 7, 8];
console.log('number exists', binarySearch(sorted_array_test, 7));
console.log('number exists', binarySearch(sorted_array_test, 10));

// Number.MAX_SAFE_INTEGER

// let intNumber = 2**53;
// console.log('num', intNumber);
// // >> 9007199254740992
//
// console.log('num', intNumber + 1);
// // >> 9007199254740992
//
// console.log('num', intNumber + 2);
// // >> 9007199254740994
//
// let l = 0;
// let u = arr.length - 1;
// let mid = (l + u) / 2;
// let mid = l + (u - l)/2;




