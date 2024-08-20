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

console.log(number);

let outside = 5;

{
    let inside = 10;
    console.log(outside, inside);
}

console.log(outside, inside);

for (let i = 1; i <= 20; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}


let cont = 10;
while (cont != 0) {
    if (cont % 2 != 0) {
        console.log(cont);
    }
    cont --;
}

let word = prompt("Inserisci una parola");

console.log(word.length);

let len;
let word = ""; 
do {
    word = prompt("inserisci una parola");
    len = word.length;
} while (len < 5);

console.log(word);

let number = 10;

{
    if (number > 5) {
        console.log("La variabile è maggiore di 5");
    } else {
        console.log("La variabile è minore di 5");
    }
}

let score = parseInt(prompt("Inserisci un numero: "));

if (score <= 59) {
    console.log("Voto insufficiente");
} else if (score < 69) {
    console.log("Voto sufficiente");
} else if (score < 89) {
    console.log("Voto buono");
} else if (score < 100) {
    console.log("Voto ottimo");
}

switch (true) {
    case (score >= 90):
        console.log("Voto ottimo");
        break;
    case (score >= 70 && score < 90):
        console.log("Voto buono");
        break;
    case (score >= 60 && score < 70):
        console.log("Voto sufficiente");
        break;
    default:
        console.log("Voto insufficiente");
}*/

let array = [1, 2, 3, 4, 5];

//console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++){
    sum += i;
}

console.log(`La somma dei numeri all interno dell array è ${sum}`);
