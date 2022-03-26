/**
 * Given a set of intervals, [[6,8], [1,9], [2,4], [4,7]]
 *              Ouptut: [1,9]
 * Return intervals after merging the overlapped ones
 *
 * Example: [[1,3], [5,9], [2,4]]
 *      Output: [[1,4], [5,9]]
 */

/**
 * 1. Let's sort the intervals by using the first number or smaller number
 * 2. Then keep comparing adjacent intervals and
 *      merge if starting number falls in the range.
 *      - For the merged interval,
 *              start = Math.min(interval1.start, interval2.start)
 *              end = Math.max(interval1.end, interval2.end)
 *
 * sort([[1,3], [5,9], [2,4]]) =>   [[1,3], [2,4], [3, 4], [5,9]]
 */

class Stack {
    #data;

    constructor() {
        this.#data = [];
    }

    push(value) {
        this.#data.push(value);
    }

    /**
     * Lets us look at the top element of the stack
     */
    peek() {
        if (this.#data.length === 0) {
            return null;
        }
        return this.#data[this.#data.length - 1];
    }

    pop() {
        return this.#data.pop();
    }

    size() {
        return this.#data.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#data = [];
    }

    print() {
        console.log(this.#data);
    }
}

function mergedIntervals(intervals) {
    if (intervals.length === 1) {
        return  intervals;
    }

    intervals.sort((interval1, interval2) => {
        return interval1[0] - interval2[0]
    });
    let result = new Stack();
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        // similar to let s1 = intervals[i][0], e1 = intervals[i][1];
        let [s1, e1] = result.peek();
        let [s2, e2] = intervals[i];

        if (e1 > s2) {
            // merge
            let newInterval = [Math.min(s1, s2), Math.max(e1, e2)];
            result.pop();
            result.push(newInterval);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}

// function t(param) {
//     let [a,b,c] = param;
//     console.log(a, b, c);
// }
//
// let obj = [1,2,3]
// t(obj);


mergedIntervals([[1,3], [5,9], [2,4]]).print();
mergedIntervals( [[1,3], [2,4], [3, 4], [5,9]]).print();
mergedIntervals( [[1,3], [2,4], [3, 5], [5,9]]).print();
mergedIntervals( [[1,3], [2,4], [3, 6], [5,9]]).print();

