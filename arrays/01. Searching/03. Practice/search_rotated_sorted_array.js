/**
 * search element in a sorted array that's rotated
 * or find minimum element in this array
 */

/**
 * target = 8
 * [1, 2, 5, 6, 8, 9, 10]
 * [5, 6, 8, 9, 10, 1, 2]
 * [9, 10, 1, 2, 5, 6, 8]
 * [10, 1, 2, 5, 6, 8, 9]
 * [6, 8, 9, 10, 1, 2, 5]
 * l                   u
 *
 */
function binarySearchInRotated(nums, target) {
    let l = 0, u = nums.length - 1;
    let mid;
    while (l <= u) {
        mid = l + Math.floor((u - l)/2);
        // result is at the mid
        if (nums[mid] === target || nums[l] === target || nums[u] === target) {
            return true;
        }

        // l = u = mid but num is not at mid
        if (mid === l && mid === u) {
            return false;
        }

        if(nums[l] <= nums[mid]) {
            // this means the left half is sorted

            if (target > nums[mid] || target < nums[l]) {
                // switch to other half
                l = mid + 1;
            } else if (target > nums[l]) {
                // continue in this half
                u = mid - 1;
            }
        } else if (nums[u] >= nums[mid]) {
            // this means the right half is sorted

            if (target > nums[u] || target < nums[mid]) {
                // switch to the other half
                u = mid - 1;
            } else if (target > nums[mid]) {
                // continue in this half
                l = mid + 1;
            }
        }
    }
    return false;
}

console.log('8 exists', binarySearchInRotated([5, 6, 8, 9, 10, 1, 2], 8));
console.log('10 exists', binarySearchInRotated([5, 6, 8, 9, 10, 1, 2], 10));
console.log('1 exists', binarySearchInRotated([5, 6, 8, 9, 10, 1, 2], 1));
console.log('7 exists', binarySearchInRotated([5, 6, 8, 9, 10, 1, 2], 7));
console.log('8 exists', binarySearchInRotated([10, 1, 2, 5, 6, 8, 9], 8));
console.log('10 exists', binarySearchInRotated([10, 1, 2, 5, 6, 8, 9], 10));
console.log('1 exists', binarySearchInRotated([10, 1, 2, 5, 6, 8, 9], 1));
console.log('7 exists', binarySearchInRotated([10, 1, 2, 5, 6, 8, 9], 7));
console.log('8 exists', binarySearchInRotated([9, 10, 1, 2, 5, 6, 8], 8));
console.log('10 exists', binarySearchInRotated([9, 10, 1, 2, 5, 6, 8], 10));
console.log('1 exists', binarySearchInRotated([9, 10, 1, 2, 5, 6, 8], 1));
console.log('7 exists', binarySearchInRotated([9, 10, 1, 2, 5, 6, 8], 7));

