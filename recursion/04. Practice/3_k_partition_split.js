/**
 * Given a "k" and an array, partition the array into "k" set of
 * numbers such that sum of numbers in any set is equal to "n"
 * and no number is left out from the original array after partitioning.
 *
 * Note that repetitions are not allowed!
 *
 * Example:
 *  Given array = [ 7, 3, 5, 12, 2, 1, 5, 3, 8, 4, 6, 4 ],
 *     visited    []
 *
 *  for k = 5 and n = 12,
 *
 *  p1 = [7,3,2]
 *  p2 = [12]
 *  p3 = [5,1,6]
 *  p4 = [5,3,4]
 *  p5 = [8,4]
 *
 *  for k = 2 and n = 30,
 *
 *  p1 = [5, 3, 8, 4, 6, 4]
 *  p2 = [7, 3, 5, 12, 2, 1]
 *
 *  for k = 3 and n = 20,
 *
 *  p1 = [7, 5, 8]
 *  p2 = [2, 1, 3, 4, 6, 4]
 *  p3 = [3, 5, 12]
 *
 *  for k = 4 and n = 15,
 *
 *  p1 = [7, 3, 5]
 *  p2 = [12, 2, 1]
 *  p3 = [5, 4, 6]
 *  p4 = [3, 8, 4]
 */

function buildPartition(arr, visited, targetSum, currentPartition, startNum) {
    if (targetSum === 0) {
        return true;
    }

    for (let i = startNum; i < arr.length; i++) {
        if ((targetSum - arr[i] >= 0) && !visited[i]) {
            visited[i] = true;
            currentPartition.push(arr[i]);
            let canBuildPartition = buildPartition(
                arr, visited, targetSum - arr[i], currentPartition, i+1);
            if (!canBuildPartition) {
                visited[i] = false;
                currentPartition.pop();
            } else {
                return true;
            }
        }
    }

    return false;
}

function paritionArr(arr, k, targetSum) {
    // todo: validate the input first

    let visited = Array(arr.length).fill(false);
    let partitions = [];

    for (let i = 0; i < k; i++) {
        let partition = [];
        buildPartition(arr, visited, targetSum, partition, 0);
        partitions[i] = partition;
    }

    return partitions;
}

console.log(paritionArr([ 7, 3, 5, 12, 2, 1, 5, 3, 8, 4, 6, 4 ], 5, 12));

