/*let first;
const second = 2;

first = 1;

console.log(first, second);

let change = 5;

console.log(change);

change = 1;

console.log(change);

let number = 5;

{
    let number = 1;
    console.log(number);
}

console.log(number);*/

let outside = 5;

{
    let inside = 10;
    console.log(outside, inside);
}

console.log(outside, inside);