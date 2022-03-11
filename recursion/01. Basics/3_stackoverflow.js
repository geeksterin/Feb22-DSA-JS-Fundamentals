function powerR(a, b) {
    console.log('b is', b);
    if (b === 1) {
        return a;
        // return 1;
    }
    return a * powerR(a, b+1); // this results in stackoverflow
}
console.log(powerR(2,2));

[1,2,3,4,5,6].pop()
