/**
 * You’re given an array A of numbers.
 * Remove elements from this array if they’re divisible by 3.
 * You should not take more than O(1) extra space.
 *
 * Example:
 * A = [1,7,2,5,0,6,9,3]
 *
 * Result = [1,7,2,5]
 */

/**
 * Abhishek Solution:
 * 1. iterate on the array and put null if element is divisible by 3
 * 2. sort the array treating null as greater than every number
 * 3. pop null from the end.
 *
 * What if I want to keep the relative ordering?
 */

/**
 * The solution for practice:
 * 1. Iterate on the array from left to right
 * 2. If the current element is divisible by 3, shift numbers from right to left 1 place
 */
