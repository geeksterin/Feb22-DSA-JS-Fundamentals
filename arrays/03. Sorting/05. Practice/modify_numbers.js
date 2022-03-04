/**
 * You’re given an array "arr" which consists of whole numbers.
 * Return an array "result" which contains numbers such that
 * arr[i]+result[i] is divisible by 3 and != 0.
 *
 * A = [2, 45, 0, 11, -9]
 * Then, B = [1, 0, 3, 1, 0] or [1, 0, -3, -2, 0]
 */

function modifyNumbers(arr) {
    let result = [];

    // iterate on the arr
    for(let index = 0; index < arr.length; index++) {
        if (arr[index]%3 === 0 && arr[index] !== 0) {
            result.push(0);
        } else {
            // dividend = divisor * quotient + remainder
            result.push(3 - (arr[index]%3));
        }
    }

    return result;
}

console.log(modifyNumbers([2, 45, 0, 11, -9]));








function test(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + result[i] === 0) {
            return false;
        }
        if ((arr[i] + result[i]) % 3 !== 0) {
            return false;
        }
    }
    return true;
}

let arr = [2, 45, 0, 11, -9];
console.log('Program is correct', test(arr, modifyNumbers(arr)));


