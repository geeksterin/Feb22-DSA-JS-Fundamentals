/**
 * Sliding window max-
 *
 * Given an array of numbers, [8, 5, 10, 7, 9, 4, 8, 12, 90, 13]
 * and a width k, return another array with
 * maximum elements in the sub-array of k width.
 *
 * input arr = [8, 5, 10, 7, 9, 4, 8, 12, 90, 13]
 * k = 3
 * Output:
 * [10, 10, 10, 9, 9, 12]
 */

/**
 * Brute force approach:
 * - for every element, look at the next k elements and find the
 *   maximum
 *
 *   time complexity - O(n*k)
 *   space - O(n-k)
 */

class Node {
    constructor(data, max) {
        this.data = data;
        this.max = max;
    }
}

function push(arr, val) {
    if (arr.length === 0) {
        arr.push(new Node(val, val));
    } else {
        arr.push(new Node(val, Math.max(arr[arr.length - 1].max, val)));
    }
}

function pop(s1, s2) {
    if(!s1.length) {
        while(s2.length) {
            push(s1, s2.pop().data);
        }
    }
    s1.pop();
}

function getMax(s1, s2) {
    let max = -1;
    if (s1.length) {
        max = Math.max(max, s1[s1.length - 1].max);
    }
    if (s2.length) {
        max = Math.max(max, s2[s2.length - 1].max);
    }
    return max;
}

function slidingWindowMax(arr, k) {
    let s1 = [];
    let s2 = [];
    let result = [];

    for (let i = 0; i < k-1; i++) {
        push(s2, arr[i]);
    }

    for (let i = 0; i < arr.length - k; i++) {
        if(i - 1 >= 0) {
            pop(s1, s2);
        }
        push(s2, arr[i+k-1]);
        result.push(getMax(s1, s2));
    }

    return result;
}

console.log(slidingWindowMax(
    [8, 5, 10, 7, 9, 4, 8, 12, 90, 13], 3)
);
// [10, 10, 10, 9, 9, 12]
