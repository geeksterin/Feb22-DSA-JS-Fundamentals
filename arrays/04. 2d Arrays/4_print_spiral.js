/**
 * Print the array in spiral form:
 *     [4,  5,  6, 10],
 *     [7, 95, 90, 20],
 *     [1,  2, -4, 30],
 *     [3, 25,  8, 50]
 *
 *     Output: 4,5,6,10,20,30,50,8,25,3,1,7,95,90,-4,2
 */

function goRight(arr, rowNum, from, to) {
    let result = [];
    for (let i = from; i <= to; i++) {
        result.push(arr[rowNum][i]);
    }
    return result;
}

function goDown(arr, colNum, from, to) {
    let result = [];
    for (let i = from; i <= to; i++) {
        result.push(arr[i][colNum]);
    }
    return result;
}

function goLeft(arr, rowNum, from, to) {
    let result = [];
    for (let i = from; i >= to; i--) {
        result.push(arr[rowNum][i]);
    }
    return result;
}

function goUp(arr, colNum, from, to) {
    let result = [];
    for (let i = from; i >= to; i--) {
        result.push(arr[i][colNum]);
    }
    return result;
}

function printSpiral(arr) {
    let result = [];
    let lastIndex = arr[0].length - 1;
    let firstIndex = 0;

    let totalElements = arr.length * arr[0].length;

    while (totalElements >= 0) {
        result = [...result, ...goRight(arr, firstIndex, firstIndex, lastIndex)];
        result = [...result, ...goDown(arr, lastIndex, firstIndex + 1, lastIndex)];
        result = [...result, ...goLeft(arr, lastIndex, lastIndex - 1, firstIndex)];
        result = [...result, ...goUp(arr, firstIndex, lastIndex - 1, firstIndex + 1)];
        totalElements -= 4 * (Math.abs(firstIndex - lastIndex));
        ++firstIndex;
        --lastIndex;
    }
    console.log(result);
}

printSpiral([
    [4,  5,  6, 10],
    [7, 95, 90, 20],
    [1,  2, -4, 30],
    [3, 25,  8, 50]
]);

