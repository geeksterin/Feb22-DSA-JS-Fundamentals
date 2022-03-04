/**
 * 1. You’re given 2 arrays, A & B.
 *    Return the elements which are present in both the arrays.
 *
 *    Input:
 *    A = [1,3,2,2,5,6]
 *    B = [2,3,2,2,5]
 *
 *    Result = [3,2,5]
 *
 */

/**
 * Abhishek's Implementation Is:
 * 1. Create object for both the arrays
 *    using array elements as key and countOfOccurrence as values.
 * 2. Loop thru any one of the objects and
 *    check if the second object hasOwnProperty(key of first object)
 * 3. If true, then push the key in result object.
 *
 */

// time complexity: O(n+m)
// space complexity: O(n)
function findCommon(a,b){
    let arr={};
    let result=[];
    for(let i=0;i<a.length;i++){
        arr[a[i]]=true;
    }
    console.log(arr);
    for(let i=0;i<b.length;i++){
        if(arr[b[i]]){
            result.push(b[i]);
            arr[b[i]]=false;
        }
    }
    return result;
}

// time complexity: O(n+m)
// space complexity: O(n+m)
let intersection = function(nums1, nums2) {

    let result=[];
    let obj1={}
    let obj2={}

    nums1.forEach((num)=>{
        obj1[num]= obj1[num]+1 || 1
    })
    nums2.forEach((num)=>{
        obj2[num]= obj2[num]+1 || 1
    })

    for(let key in obj1){
        if(obj2.hasOwnProperty(key)){
            result.push(+key);
        }
    }
    return result

};

/**
 * Atishay's implementation:
 * 1. Iterating thru 1st array
 * 2. For every element of 1st array, iterate thru 2nd array
 * 3. If element of first array is equal to current element of second array,
 *    then add the element in the result array.
 */
// arr1 = n , arr2 = m =>
// time complexity O (n * m),
// space complexity O (n * m)
let matchElements = (arr1, arr2) => {
    let result = [];
    // [2,2], [2,2,2]
    // [2,2,2, 2,2,2]
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    let res = [];
    for(let i = 0; i <= result.length; i++) {
        // sort prior to this
        if(result[i] !== result[i+1]) {
            res.push(result[i]);
        }

    }
    return res;
};

let array1 = [1, 3, 2, 2, 5, 6];
let array2 = [2, 3, 2, 2, 5];

let result = matchElements(array1, array2);
console.log(result);




// function testArrayIntersection(arr1, arr2, arrRes) {
//
// }
