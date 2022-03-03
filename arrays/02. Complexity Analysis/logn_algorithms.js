/**
 *                                  => 2^4
 * 4th last [1,2,3,4,5,6,7,8]       => 2^3
 * 3rd last [1,2,3,4]               => 2^2
 * second last step [1,2]           => 2^1
 * in the end [1]                   => 2^0
 *
 * time complexity => O(f(n)) = O(log(n))
 * space complexity => O(1)
 */
function binarySearch(arr, numberToBeSearched) {
    let l = 0;
    let u = arr.length - 1;
    let mid = l + (u - l)/2

    while(l <= u) {
        let mid = Math.floor(l + (u - l)/2);
        // console.log('l', l, 'u', u, 'mid', mid);
        if (arr[mid] === numberToBeSearched) {
            return true;
        }
        if (arr[mid] < numberToBeSearched) {
            l = mid + 1;
        } else {
            u = mid - 1;
        }
    }

    return false;
}

/**
n! = 1*2*3*4......n
**/












