


let obj = {a: '1'};
let oneDimensionalArray = [1, "test", obj];
let twoDimensionalArray = [
    [1,2],
    [3,4],
    [5,6],
    oneDimensionalArray
];

for (let i = 0; i < oneDimensionalArray.length; i++) {
    console.log(oneDimensionalArray[i]);
}

for (let i = 0; i < twoDimensionalArray.length; i++) {
    for (let j = 0; j < twoDimensionalArray[i].length; j++) {
        console.log(twoDimensionalArray[i][j]);
    }
}

console.log(oneDimensionalArray);
console.log(twoDimensionalArray);

console.log(twoDimensionalArray[0][0]);
console.log(twoDimensionalArray[1][1]);

console.log(twoDimensionalArray[3][2]);
console.log(twoDimensionalArray[3][2].a);
console.log(twoDimensionalArray[3][2]['a']);
