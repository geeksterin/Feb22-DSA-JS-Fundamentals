/**
 * 1. Given a number n, print all the number combinations from
 *    1 to n whose sum is equal to n. Numbers can be repeated.
 *
 * Example for n = 5, the output should have the following-
 *      [ 1, 1, 1, 1, 1 ]
 *      [ 1, 1, 1, 2 ]
 *      [ 1, 1, 2, 1 ]
 *      [ 1, 1, 3 ]
 *      [ 1, 2, 1, 1 ]
 *      [ 1, 2, 2 ]
 *      [ 1, 3, 1 ]
 *      [ 1, 4 ]
 *      [ 2, 1, 1, 1 ]
 *      [ 2, 1, 2 ]
 *      [ 2, 2, 1 ]
 *      [ 2, 3 ]
 *      [ 3, 1, 1 ]
 *      [ 3, 2 ]
 *      [ 4, 1 ]
 *      [ 5 ]
 */

((((((5 - 1) - 1 ) - 1) - 1) - 1)
    ((((((5 - 1) - 1 ) - 2) - 1)  0

function printSumsRecursively(targetSum, nums, numIndex) {
    console.log('target sum', targetSum, 'nums', nums.slice(0, numIndex), 'numIdx', numIndex);
    if (targetSum === 0) {
        console.log(nums.slice(0, numIndex));
        return;
    }
    for (let i = 1; i <= targetSum; i++) {
        if (targetSum - i >= 0) {
            nums[numIndex] = i;
            printSumsRecursively(
                targetSum - i, nums, numIndex + 1);
        }
    }
}

function printSums(n) {
    printSumsRecursively(n, [], 0);
}

// printSums(5);




/**
 * 2. Given a number n, print all the number combinations from
 *    1 to n whose sum is equal to n. Numbers cannot be repeated.
 *
 * Example, for n = 5, the output should have the following-
 *
 *      [ 1, 4 ]
 *      [ 2, 3 ]
 *      [ 5 ]
 */

function printSumsNoRepeteRecursively(targetSum, nums, numIndex, startNum) {
    console.log('target sum', targetSum, 'nums',
        nums.slice(0, numIndex), 'numIdx', numIndex);
    if (targetSum === 0) {
        console.log(nums.slice(0, numIndex));
        return;
    }
    for (let i = startNum; i <= targetSum; i++) {
        if (targetSum - i >= 0) {
            nums[numIndex] = i;
            printSumsNoRepeteRecursively(targetSum - i, nums, numIndex + 1, i+1);
        }
    }
}

printSumsNoRepeteRecursively(5, [], 0, 1);
