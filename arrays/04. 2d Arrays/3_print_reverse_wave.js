/**
 * Print the array in reverse wave form:
 *     [4,  5,  6],
 *     [7, 95, 90],
 *     [1,  2, -4]
 *
 *     Output: 6,90,-4, 5,95,2, 4,7,1
 */

function printReverseWaveForm(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[j][arr.length - 1 - i]);
        }
    }
    console.log(result);
}

printReverseWaveForm([
    [4,  5,  6],
    [7, 95, 90],
    [1,  2, -4]
]);
