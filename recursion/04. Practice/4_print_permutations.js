/**
 * Given a string, print all permutations of the string without repetition
 * str = "abc"
 * abc, acb
 * bac, bca
 * cab, cba
 */

/**
 * perm(abc) => perm(a + perm(bc))
 *
 * abcde
 *
 *   c   de
 *
 *
 *
 * => a, bc
 *          => b,c
 *             bc       , cb
*             abc bca    acb, cba
*     b, ac
 *          => a,c
 *          ac          ca
 *        bac, acb     bca  cab
 *
*    c, ab
 *          => a,b
 *              ab          ba
*            cab   abc    cba  bac
 *
 */

function permutations(str) {
    let result = [];
    if(str.length === 1) {
        return [str];
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let rest = str.slice(0, i) + str.slice(i+1);
        console.log('char', char, 'rest', rest);
        let perms = permutations(rest);
        for (let j = 0; j < perms.length; j++) {
            if (!result.includes(char + perms[j])) {
                result.push(char + perms[j]);
            }
            if (!result.includes(perms[j] + char)) {
                result.push(perms[j] + char);
            }
        }
    }
    return result;
}

console.log(permutations("abcd"));
