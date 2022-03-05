/**
 * given a 2d square array, print -
 * 1. The sum of diagonal
 * 2. The sum of other diagonal
 *
 *              4,  5,  6
 *              7, 95, 90
 *              1,  2,  4
 *
 *     For the first part -> 4 + 95 + 4
 *     For the second part -> 6 + 95 + 1
 */



function printFirstDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) {
                sum += arr[i][j];
            }
        }
    }
    console.log('diagonal sum: ', sum);
}

printFirstDiagonal([
    [4,  5,  6],
    [7, 95, 90],
    [1,  2, -4]
]);

function printSecondDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            if ((arr.length - i - 1) === j) {
                sum += arr[i][j];
            }
        }
    }
    console.log('another diagonal sum: ', sum);
}

printSecondDiagonal([
    [4,  5,  6],
    [7, 95, 90],
    [1,  2, -4]
]);
