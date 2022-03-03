let testArray = [-2, 45, 0, 11, 2, -9];

let employeeList = [
    { name: 'John', age: 20},
    { name: 'Don', age: 40},
    { name: 'Ram', age: 30},
    { name: 'Shyam', age: 30},
    { name: 'Doe', age: 15}
];

console.log('unsorted array', testArray);
testArray.sort();
console.log('sorted array', testArray);

function compareNumbers(n1, n2) {
    console.log('n1', n1, 'n2', n2);
    if (n1 > n2) {
        return 1;
    }
    if (n1 < n2) {
        return -1;
    }
    return 0;
}

testArray.sort(compareNumbers);
console.log('sorted array', testArray);

function compareEmployees(e1, e2) {
    // if (e1.age > e2.age) {
    //     return 10;
    // }
    // if (e1.age < e2.age) {
    //     return -100;
    // }
    // return 0;

    return e1.age - e2.age;
}

console.log('original employee list', employeeList);
employeeList.sort(compareEmployees);
console.log('sorted employee list', employeeList);

// TODO: update the compareEmployees so that when employee ages are equal, we compare the names in
//  reverse-alphabetical order

