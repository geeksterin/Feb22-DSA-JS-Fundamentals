
// constant algorithms
function getDate() {
    return "2022-02-28T09:25:00";
}

function getCurrentTime(input) {
    getDate();
}
console.time('time taken');
console.log('time taken to get time', getCurrentTime(1234));
console.timeEnd('time taken');

// not a constant time
// function addThem(num1, num2) {
//     return num1 + num2;
// }

// not a constant time
// function multiplication (num1, num2) {
//     return num1*num2;
// }



