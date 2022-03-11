
let str = "abcd";

/**
 * write a function to swap charaters
 * at index from and to
 */
function swapArr(str, from, to) {
    let tmp = str[from];
    str[from] = str[to];
    str[to] = tmp;

    return str;
}

function swap(str, from, to) {
    return swapArr(str.split(""), from, to).join("");
}

// console.log(swap(str, 0,3));

/**
 * Reverse a string using recursion
 *
 * a  b  c  d
 *
 * - start from the beginning, move towards the end
 *          while (i < (length - i))
 * - Swap str[i] with str[length - i]
 *
 * dry run
 * i = 0 -> swap(a, d) => "dbca"
 * i = 1 -> swap(b, c) => "dcba"
 * i = 2 -> swap(c, b) => "dbca"
 * i = 3 -> swap(d, a) => "abcd"
 */
function reverse(str, l, h) {
    // terminating condition
    if (l >= h) {
        return str;
    }
    str = swap(str, l, h);
    return reverse(str, l+1, h - 1);
}

function reverseStr(str) {
    return reverse(str, 0, str.length - 1);
}

console.log(reverseStr("abcd") === "dcba");
let testStr = "abcdefghijklmnopqrstuvwxyz";
console.log(reverseStr(testStr));


