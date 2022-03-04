/**
 * Sort an array consisting of 0, 1 and 2 only
 *
 * example: [1,1,0,0,0,1,2,1,0,1,2]
 * output: [0,0,0,0,1,1,1,1,1,2,2]
 */


/**
 * Suryansh's solution:
 * 1. Take 3 variables zero_count, one_count, two_count.
 * 2. Iterate on the array.
 * 3. Count the frequency of every element and update the count variables.
 * 4. Create an array and push the numbers in it based on count.
 *
 * time complexity: O(n)
 * space complexity: O(1)
 */

/**
 * Dipankar's solution:
 * 1. Take 3 pointers, low=0, mid=0, high=arr.length-1
 * 2. while mid<=high iterate on the array.
 * 3. if arr[i] === 0, swap with low pointer, increase the low & mid pointer,
 *    if arr[i] === 1, increase the mid pointer,
 *    if arr[i] === 2, swap with the high pointer, decrease the high pointer
 *
 * time complexity: O(n)
 * space complexity: O(1)
 */


/** Mukul's solution:
 * 1. Take 3 pointers, low=0, high=arr.length-1
 * 2. while low <= high iterate on the array.
 * 3. if arr[i] === 0, swap with low pointer, increase the low pointer
 *    if arr[i] === 2, swap with the high pointer, decrease the high pointer
 */
