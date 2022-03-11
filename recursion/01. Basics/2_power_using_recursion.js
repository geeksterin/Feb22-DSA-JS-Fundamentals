/**
 * Write a function that takes 2 numbers, a & b
 * and returns a ^ b.
 * We can not use Math.power()
 */

// iteration
/**
 * Keep multiplying a by itself b times
 * @param a
 * @param b
 * @returns {*}
 */
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    return result;
}
// test
console.log(power(2,2));
console.log(power(2,3));
console.log(power(3,3));
console.log('---------------------');
// recursion
// result = a * power(a, b-1)
//               |-> a * power(a, b-2)
//                        |-> a * power(a, b-3)
//                              .... till b = 1
function powerR(a, b) {
    if (b === 1) {
        return a;
        // return 1;
    }
    return a * powerR(a, b-1);
}

// test
console.log(powerR(2,2));
/*              |-> 2 * powerR(2, 1)
                        -> 2
 */
console.log(powerR(2,3));
console.log(powerR(3,3));
