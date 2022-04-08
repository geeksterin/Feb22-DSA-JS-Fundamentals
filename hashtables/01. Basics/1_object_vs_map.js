/**
 * Object vs Map in JS
 *
 */

let obj = { a: 1, b: 2 };
console.log(obj);
console.log(obj.a);
obj.c = 3;
console.log(obj);

obj['1'] = 10;
console.log(obj);

obj[true] = 'abcd';

console.log(obj);

let d = { f: 20 };

obj[d] = 10;

console.log(obj);

let e = { g: 30 };

obj[e] = 40;
console.log(obj);

console.log(obj[{}]);

let map = new Map();
map.set('str', 'some-value');
map.set(10, 'another-value');
map.set(d, 10);
map.set(e, 40);

console.log(map);
console.log(JSON.stringify(map));
console.log(JSON.stringify(obj));
