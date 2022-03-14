/**
 * We are given 2 strings, a & b
 * We have to find the length of the longest common subsequence between a & b;
 * We'll do this, using recursion.
 * We can't change the relative order of the characters.
 *
 * Example,

 *
 * output = 2
 *
 * eg:
 * a = "abcd"
 * b = "efgh"
 *
 * output = 0
 *
 * eg:
 * a = "aefbpodc"
 * b = "bdca"
 *
 * output = 3
 *
 */

function longestCommonSubsequence(a, b) {
    console.log(a, b);
    for (let i=0; i<a.length; i++) {
        let currentChar = a[i];
        for(let j=0; j<b.length; j++) {
            if (currentChar === b[j]) {
                return Math.max(
                    1 + longestCommonSubsequence(a.slice(i+1), b.slice(j+1)),
                    longestCommonSubsequence(a.slice(i+1), b)
                );
            }
        }

    }
    return 0;
}

// console.log(longestCommonSubsequence("abcd", "ad"));
console.log(longestCommonSubsequence("aefbpodca", "bdca"));
