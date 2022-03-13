/**
 * Merge sort using recursion
 */
// 2 subarrays right before merge
/*
    left = [1,2,3,4,5]
    right = [6,7,8,9];
 */
function merge(leftSubArr, rightSubArr) {
    let i=0, j=0;
    let newArray = [];

    console.log('sorted left', leftSubArr);
    console.log('sorted right', rightSubArr);
    while(i < leftSubArr.length && j < rightSubArr.length) {
        if (leftSubArr[i] > rightSubArr[j]) {
            newArray.push(rightSubArr[j]);
            j++;
        } else {
            newArray.push(leftSubArr[i]);
            i++;
        }
    }

    while(i < leftSubArr.length) {
        newArray.push(leftSubArr[i]);
        i++;
    }

    while(j < rightSubArr.length) {
        newArray.push(rightSubArr[j]);
        j++;
    }

    console.log('merging sorted', newArray);
    return newArray;
}

function mergeSort(arr) {
    let l = 0;
    let h = arr.length - 1;
    // floor(0.5) = 0
    // ceil(0.5) = 1
    //  [ 9, 7 ].splice(0,1) = [9]
    //  [ 9, 7 ].splice(0,0) = []
    if (l < h) {
        // there's a reason we use ceil and not floor.
        let mid = l + Math.ceil((h - l)/2);
        let left = arr.splice(l, mid);
        let right = arr;
        console.log('left', left);
        console.log('right', right);
        let sortedLeft = mergeSort(left);
        let sortedRight = mergeSort(right);
        return merge(sortedLeft, sortedRight);
    }

    return arr;
}

function sort(arr) {
    return mergeSort(arr);
}


let testArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
console.log('input arr', testArray);
console.log('input arr size', testArray.length);

let result = sort(testArray);
console.log('sorted input', result);

// testArray = [1,2,3,4,5,6,7,8,9];
// console.log('input arr', testArray);
// console.log('input arr size', testArray.length);
//
// result = sort(testArray);
// console.log('sorted input', result);
