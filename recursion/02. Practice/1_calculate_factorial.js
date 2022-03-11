/**
 * calculate factorial of a number
 * fact(1) = 1
 * fact(0) = 1
 * fact(4) = 4 x 3 x 2 x 1
 * fact(5) = 5 x 4 x 3 x 2 x 1
 * fact(5) = 5 x fact(4)
 *                  4 * fact(3)
 *                          3 * fact(2)
 *                              2 * fact(1)
 *                                  1
 */

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log('factorial(2)', factorial(2));
console.log('factorial(3)', factorial(3));
console.log('factorial(5)', factorial(5));

