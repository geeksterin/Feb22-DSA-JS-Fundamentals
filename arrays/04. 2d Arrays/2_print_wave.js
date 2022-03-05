/**
 * Print the array in wave form:
 *     [4,  5,  6],
 *     [7, 95, 90],
 *     [1,  2, -4]
 *
 *     Output: 4,7,1,5,95,2,6,90,-4
 */

function printWaveForm(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[j][i]);
        }
    }
    console.log(result);
}

printWaveForm([
    [4,  5,  6],
    [7, 95, 90],
    [1,  2, -4]
]);
