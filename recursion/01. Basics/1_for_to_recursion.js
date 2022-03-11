

function printAllTill(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

function printAllTillRec(num, i) {
    console.log(i);
    if (i === num) {
        return;
    }
    printAllTillRec(num, i+1);
}

printAllTill(5);
console.log('-----------');
printAllTillRec(5, 0)
// |-> printAllTillRec(5, 1)
//     |-> printAllTillRec(5, 2)
//         |-> printAllTillRec(5, 3)
//             |-> printAllTillRec(5, 4)
//                 |-> printAllTillRec(5, 5)

/**
 * Types of recursion:
 *
 *  1. Direct :
 *      head: We start from the minimum in dataset and move towards largest
 *      tail: We start from the maximum in dataset and move towards smallest
 *      tree: The result is built with multiple recursive calls
 *          Example:
 *              result = power(2,2) + power(2,3) + power(2,4)
 *  2. Nested:
 *      We pass the argument to the recursive call as another function call
 *      Example:
 *      Calculate power of 4 for the given number
 *      result = power(power(a,2),2)
 *  3. Indirect:
 *      result = funA -> funB -> funC -> funA
 */

