
// Derive the Big O notation


// linear time
// constant space
function linearSearch(arr, target) {
    let i = 0;
    for(i = 0; i <= arr.length-1; i++) {
        if (target === arr[i] && target !== arr[i+1] && target !== arr[i-1]) {
            return true;
        }
    }
    if (i === 0 && arr[i] === target) {
        return true;
    }
    return false;
}

// function of time for the above program ->
//              f(n) = 3n
//              where n is the array length

//              O(f(n)) = O(3n) = O(n)


function linearSearchFdUp(arr, target) {
    let i = 0;
    let index = -1;
    for(i = 0; i <= arr.length-1; i++) {
        if (target === arr[i] && target !== arr[i+1] && target !== arr[i-1]) {
            index = i;
        }
    }
    if (i === 0 && arr[i] === target) {
        index = i;
    }
    return index;
}


// function of time for the above program ->
//              f(n) = 3n + 2
//              where n is the array length

//              O(f(n)) = O(3n + 2) = O(n)


