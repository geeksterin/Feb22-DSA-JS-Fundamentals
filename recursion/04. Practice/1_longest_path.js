let mat = [
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0]
];

/**
 * We are given a target coordinate. Find the length of the longest path
 * that can be taken from 0,0 to i,j.
 * Conditions:
 * - Only visit one cell once.
 * - Can't move diagonally.
 * - Can only visit cells filled with 1.
 */

function canGo(mat, visited, nextX, nextY) {
    if (nextX >= 0 && nextY >= 0
        && nextX < mat.length && nextY < mat[nextX].length
        && mat[nextX][nextY] !== 0 && !visited[nextX][nextY]) {
        return true;
    }
    return false;
}

function buildVisitedArray(mat) {
    let visited = [];
    for (let i=0; i<mat.length; i++) {
        visited.push(Array(mat[i].length).fill(false));
    }
    return visited;
}

// console.log(buildVisitedArray(mat));

function findLongestPath(mat, visited, x, y, targetX, targetY, maxDist, currDist) {
    if (mat[x][y] === 0) {
        return 0;
    }
    if (x === targetX && y === targetY) {
        return Math.max(maxDist, currDist);
    }
    visited[x][y] = true;
    if (canGo(mat, visited, x+1, y)) {
        maxDist = findLongestPath(
            mat, visited, x+1, y, targetX, targetY, maxDist, currDist+1);
    }
    if (canGo(mat, visited, x, y+1)) {
        maxDist = findLongestPath(
            mat, visited, x, y+1, targetX, targetY, maxDist, currDist+1);
    }
    if (canGo(mat, visited, x-1, y)) {
        maxDist = findLongestPath(
            mat, visited, x-1, y, targetX, targetY, maxDist, currDist+1);
    }
    if (canGo(mat, visited, x, y-1)) {
        maxDist = findLongestPath(
            mat, visited, x, y-1, targetX, targetY, maxDist, currDist+1);
    }
    visited[x][y] = false;
    return maxDist;
}

function longestPath(mat, i, j) {
    let visited = buildVisitedArray(mat);
    return findLongestPath(mat, visited, 0, 0, i, j, 0, 0);
}

console.log(longestPath(mat, 2, 2));
