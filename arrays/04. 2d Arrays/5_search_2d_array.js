/**
 * We have a 2d array where,
 *  1. every row is sorted in ascending order,
 *  2. Last element of previous row is smaller than
 *     first element of current row.
 *
 * Write a program to search this array
 *
 *     [-4,  -5,  6, 10],
 *     [20, 25, 30, 32],
 *     [50, 60, 64, 70],
 *     [73, 80,  98, 500]
 *
 *     1d [(r-1)*(c-1)] -> 2d [r-1][c-1]
 *
 *
 *     [-4, -5,  6],
 *     [20, 25, 30],
 *     [50, 60, 64]
 *
 *     Output: [rowNum, colNum] if number exists, else [-1, -1]
 */

// time complexity: O(n^2)
// space complexity: O(1)
function bruteForceSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

// time complexity: O(n*log(n))
// space complexity: O(1)
// iterate on every row and perform a binary search
// to optimise further, compare only the element of every row
// and if number is smaller, then do binary search on that row.
// time complexity: O(n + log(n))
// space complexity: O(1)
function slightlyOptimisedSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // binary search on arr[i]
    }
}

// most optimised: O(2*log(n)) ~= O(log(n))
// write a function to convert 2d array into 1d and
// then map indexes from 1d array to 2d array quotient and
// remainder
