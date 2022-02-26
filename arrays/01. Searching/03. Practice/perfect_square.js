
/**
 Perfect squares definition:

  4 -> 2*2

 16 -> 4*4

 256 -> 16*16

 10 not a perfect square -> 3.2...*3.2..

 **/

/**
 * Algorithm:
 * Naive approach first:
 *
 * num = 100
 *
 * start from 0, iterate till 100 and check i*i === 100
 * something better -
 * start from 0, iterate till k/2 and check i*i === 100
 * even better -
 * do it using binary search!
 * l = 1, u = k = 100
 * mid = Math.floor(l + (u-l)/2) => 49
 * if (mid*mid === k) => perfect square
 *
 * 100 -> (0+100)/2 * (0+100)/2 === 100? false
 * (0+49)/2 * (0+49)/2 === 100 ? false
 * (0+25)/2 * (0+25)/2 === 100 ? false
 */

function isAPerfectSquare(num) {
    let l = 0, u = num;
    let mid;
    while (l <= u) {
        mid = l + Math.floor((u - l)/2);
        let currentSquare = mid * mid;
        if (currentSquare === num) {
            return true;
        }
        if (currentSquare > num) {
            u = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return false;
}

console.log(100, 'is perfect square:', isAPerfectSquare(100));
console.log(50, 'is perfect square:', isAPerfectSquare(50));
console.log(10, 'is perfect square:', isAPerfectSquare(10));
console.log(4, 'is perfect square:', isAPerfectSquare(4));
console.log(0, 'is perfect square:', isAPerfectSquare(0));

