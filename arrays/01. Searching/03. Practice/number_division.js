/**
 * Number division
 * 80/4 = 2
 * x/y = z
 * => x = z*y
 */
/**
 * first approach:
 * - keep doing (y = sum + y) until sum = x
 *
 * second approach:
 * - increment i
 * - until i*y <= x
 *
 * third approach:
 * - find mid by using u=1, l=x
 * - if (mid*y === x) return mid
 * - else modify u or l to reduce the sample set.
 *
 * x= 80, y = 4, mid = (1+80)/2 ~ 40 => if (mid*y === x) ? false
 *
 *
 */

function division(x, y) {
    // return x/y but division operator is not allowed
    let l = 1, u = x;
    let mid;
    while (l <= u) {
        mid = l + Math.floor((u - l)/2);
        let currentProduct = mid * y;
        if (currentProduct === x) {
            return mid;
        }
        if (currentProduct > x) {
            u = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return mid;
}

console.log('20/2=', division(20,2));
console.log('30/15=', division(30,15));
console.log('30/20=', division(30,20));
// TODO: fix the answer for this. Should return decimal value

