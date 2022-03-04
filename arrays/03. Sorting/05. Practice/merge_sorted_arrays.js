/**
 * You’re given 2 arrays, A & B.
 * Merge them into a single array and the result
 * should also be sorted.
 *
 * Example:
 *  A: [1,3,5]
 *  B: [2,4,6,7]
 *
 *  C: [1,2,3,4,5,6,7]
 */

/**
 * Dipankar's solution
 *
 * 1. iterating on both A&B simultaneously
 * 2. if current element of A is greater than current element of B,
 *      then push element of B in the result array and increase counter of
 *      B
 * 3. Do the same for A if current element of B is greater than current element of A
 */

function mergeSortedArrays(a, b) {
    let aMax = a.length, bMax = b.length;
    let aIndex = 0, bIndex = 0;
    while (aIndex < aMax && bIndex < bMax) {
        // TODO:
    }
}
