/**
 * Fibonacci Series:
 * Fib(n)  0 1 1 2 3 5 8 13....
 * Index   0 1 2 3 4 5 6 7
 * Fib(7) = Fib(6)                              +           Fib(5)
 *             Fib(5)          + Fib(4)                 Fib(4) + Fib(3)
 *          Fib(4) + Fib(3)
 * Fib(n) = Fib(n-1) + Fib(n-2)
 */

/**
 * Print fibonacci series containing "n"
 * numbers using recursion;
 * fibonacci(7)
 * Output:
 * 0 1 1 2 3 5 8 13
 */

function fibonacci(n, arr) {
    if (n <= 1) {
        return n;
    }
    let fibN = fibonacci(n-1, arr) + fibonacci(n-2, arr);
    console.log(fibN);
    if (arr.length && arr[arr.length - 1] <= fibN) {
        arr.push(fibN);
    }
    return fibN;
}

function printFibonacci(num) {
    let arr = [0,1];
    fibonacci(num, arr);
    console.log('arr', arr);
}

printFibonacci(7);

// todo: improve the runtime using the array
