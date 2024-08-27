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
}

let array = [1, 2, 3, 4, 5];

//console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++){
    sum += i;
}

console.log(`La somma dei numeri all interno dell array è ${sum}`);

let inverted = [];
let len = array.length;
let cont = len;
for (let i = 0; i < len; i++){
    inverted.push(array[cont - 1]);
    cont--;
}

console.log(`L'array invertito è ${inverted}`);

let parole = [];

for (let i = 1; i <= 5; i++){
    let word = prompt("Inserisci una parola: ");
    parole.push(word);
}

console.log(parole);

for (let i of parole) {
    if (i.length % 2 != 0){
        console.log(i);
    }
}

let person = {
    name : "Marco",
    age : 25,
    city : "Roma"
}

//console.log(person);

//console.log(person.age);

person.age = 26;
console.log(person.age);

Object.assign(person, {job : "Web Developer"});
//console.log(person.job);

let valori = Object.values(person);
let cont = 0;
for (keys in person){
    console.log(keys + ": " + valori[cont]);
    cont++;
}

function outerFunction (x, initialValue){
    let result = initialValue;
    
    function innerFunction(y){
        result = result + y;
        return result;
    }
    return innerFunction;
}

let addTen= outerFunction(1, 10);
//console.log(addTen);

console.log(outerFunction(1, 10)(5));
console.log(outerFunction(1, 10)(5));


//PROVA DELL'ESERCIZIO: FUNZIONI ANNIDATE 1
let addFive = outerFunction(5);
console.log(addFive(3)); 

let student = {
    name : "Marco Cianci",
    age : 25,
    grade : "diploma liceale",
    school : "Liceo Machiavelli"
}

let keys = Object.keys(student);
//console.log(keys);

let values = Object.values(student);
//console.log(values);

let couples = Object.entries(student);
//console.log(couples);

for (let i of couples){
    let key = i[0];
    let value= i[1];
    console.log(key + ": " + value);
}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((item) => {
    console.log(item * 2);
})

let sqauredNumbers = numbers.map((item) => {
    return item * item;
})

//Scrittura alternativa
let sqauredNumbers2 = numbers.map(function(item){
    return item * item;
})

console.log(sqauredNumbers);
console.log(sqauredNumbers2);

let students = [
    {
        name: "Marco",
        grade: 66
    },
    {
        name: "Marco",
        grade: 56
    },
    {
        name: "Marco",
        grade: 70
    },
    {
        name: "Marco",
        grade: 55
    }
]

let passedStudents = students.filter((item) => {
    return item.grade > 60;
})

console.log(passedStudents);

let notPassed = students.find((item) => {
    return item.grade < 60;
})

console.log(notPassed);

let expenses = [10, 20, 22, 32, 50, 1, 6, 78, 89];

let sum = expenses.reduce((accumulator, item) => {
    return accumulator + item;
}, 0)

console.log(sum);

let words = ["banana", "apple", "cherry", "date"];

console.log(words);

words.sort();

console.log(words);

function createCounter(){
    let count = 0;
    return {
        increment(){
            count++;
            return count;
        },
        decrement(){
            count--;
            return count;
        }

    }
}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());*/


class Automobile {
    marca = ""
    modello = ""
    anno = 0
    chilometraggio = 0

    constructor(marca, modello, anno, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this. anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione(){
        console.log(`${this.marca} ${this.modello} ${this.anno}`);
    }

    aggiungiChilometri(km){
        this.chilometraggio += km;
    }

    mostraChilometraggio(){
        console.log(this.chilometraggio);
    }

    #calcolaEta(){
        let calc = 2024 - this.anno;
        console.log(calc);
    }

    mostraEta(){
        this.#calcolaEta();
    }

    _controllaChilometri(){
        if (this.chilometraggio > 50000){
            console.log("Avviso: chilometri superiori a 50k");
        }
    }
}

const fiat = new Automobile("Fiat", "500", 2015, 10);
/*fiat.descrizione();

fiat.mostraChilometraggio();
fiat.aggiungiChilometri(2);
fiat.mostraChilometraggio();*/
fiat.mostraEta();

Automobile.prototype.saluta = function(){
    console.log(`${this.marca} ${this.modello}`);
};

fiat.saluta();

class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca, modello, anno, chilometraggio, autonomia ){
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione(){
        console.log(`${this.marca} ${this.modello} ${this.anno} ${this.autonomia}`);
    }

    ricarica(km){
        this.autonomia += km;
    }
}

const fiatElettrica = new Elettrica("Fiat", "500E", 2015, 60000, 60);

/*fiatElettrica.descrizione();
fiatElettrica.ricarica(10);
fiatElettrica.descrizione();*/

fiatElettrica.saluta();
fiatElettrica._controllaChilometri();









