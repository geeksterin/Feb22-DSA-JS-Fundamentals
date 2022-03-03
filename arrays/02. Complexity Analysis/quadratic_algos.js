let input_arr =
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

/**
 * f(n) = (2n)^2  = 4n^2
 * where n is number of rows & columns
 *
 * O(f(n)) = O(n^2)
 * @param arr
 * @param target
 * @returns {number[]}
 */
function linearSearch(arr, target) {
    let i = 0, j = 0;
    let result = [-1, -1];
    for(; i<arr.length; i++) {
        for(j=0; j<arr[i].length; j++) {
            console.log('element being compared', arr[i][j]);
            if (arr[i][j] === target) {
                result = [i, j];
            }
        }
    }

    return result;
}

console.log('linear search', linearSearch(input_arr, 1));
console.log('linear search', linearSearch(input_arr, 5));
console.log('linear search', linearSearch(input_arr, 9));
console.log('linear search', linearSearch(input_arr, 10));
