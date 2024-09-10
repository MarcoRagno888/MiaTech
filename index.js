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

for (let i = 0; i <= 20; i++){
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
    sum += array[i];
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

console.log(counter.decrement());


class Automobile {
    marca = ""
    modello = ""
    anno = 0
    chilometraggio = 0

    #contatoreChiamate = 0;

    constructor(marca, modello, anno, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this. anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione(){
        return `${this.marca} ${this.modello} ${this.anno}`;
    }

    aggiungiChilometri(km){
        this.chilometraggio += km;
        this.#incrementaContatore();
    }

    mostraChilometraggio(){
        return this.chilometraggio;
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

    static confrontaChilometraggio(auto1, auto2){
        let km1 = auto1.chilometraggio;
        let km2 = auto2.chilometraggio;

        if (km1 > km2) {
            console.log("L'auto 1 ha piu km");
        } else if (km1 == km2) {
            console.log("Le auto hanno gli stessi km");
        } else {
            console.log("L'auto 2 ha piu km");
        }
    }

    #incrementaContatore(){
        this.#contatoreChiamate += 1;
    }

    mostraContatoreChiamate(){
        console.log(this.#contatoreChiamate);
    }

    get chilometraggio(){
        return this.chilometraggio;
    }

    set chilometraggio(nuovoChilometraggio){
        if (nuovoChilometraggio >= this.chilometraggio){
            this.chilometraggio = nuovoChilometraggio;
        }
    }

    static verificaIstanza(obj,classe){
        if (obj instanceof classe){
            console.log("L'oggetto è stato creato dalla classe");
        } else {console.log("L'oggetto NON è stato creato dalla classe")}
    }
}

const fiat = new Automobile("Fiat", "500", 2015, 10);
const mercedes = new Automobile("Mercedes", "Classe A", 2020, 8);
Automobile.confrontaChilometraggio(fiat, mercedes);
console.log(fiat.descrizione());

console.log(fiat.mostraChilometraggio());

console.log(fiat.mostraChilometraggio());
fiat.mostraEta();

fiat.aggiungiChilometri(2);
fiat.mostraContatoreChiamate();
console.log(fiat.chilometraggio);
fiat.chilometraggio = 20;
console.log(fiat.chilometraggio);


Automobile.prototype.saluta = function(){
    return `${this.marca} ${this.modello}`;
};

//fiat.saluta();

class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca, modello, anno, chilometraggio, autonomia ){
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione(){
        return `${this.marca} ${this.modello} ${this.anno} ${this.autonomia}`;
    }

    ricarica(km){
        this.autonomia += km;
    }
}

const fiatElettrica = new Elettrica("Fiat", "500E", 2015, 60000, 60);

fiatElettrica.descrizione();
fiatElettrica.ricarica(10);
console.log(fiatElettrica.descrizione());

fiatElettrica.saluta();
fiatElettrica._controllaChilometri();


class Camion extends Automobile {
    caricoMassimo = 0;
    carico = 0;

    constructor(marca, modello, anno, chilometraggio, caricoMassimo, carico){
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo;
        this.carico = carico;
    }

    descrizione(){
        return `${this.marca} ${this.modello} ${this.anno} ${this.chilometraggio} ${this.caricoMassimo} ${this.carico}`;
    }

    carica(kg) {
        if ((kg+this.carico) <= this.caricoMassimo){
            this.carico += kg;
        }
    }
}

const tir = new Camion("Mercedes", "Tir", 1998, 100000, 2000, 1700);
console.log(tir.descrizione());
tir.carica(100);
console.log(tir.descrizione());

console.log(fiat instanceof Automobile);
console.log(tir instanceof Camion);
console.log(tir instanceof Automobile);
Automobile.verificaIstanza(tir, Camion);
Automobile.verificaIstanza(tir, Automobile);


let numbersArray = [1, 2, 3, 4, 5];

let [numero1, ,numero2] = numbersArray;

console.log(numero1);
console.log(numero2);

let lessThanFive = [1, 2, 3];

let [num1, num2, num3, num4=1, num5=1] = lessThanFive;

console.log(num1, num2, num3, num4, num5);

let ogg = {
    nome : "Marco",
    cognome : "Cianci",
    eta : 25
}

let {nome: n, cognome: c, mansione = "Web Dev"} = ogg;

console.log(n, c, mansione);

let ArrayRest = [1, 2, 3, 4, 5];

let ArrayRestCopiato = [...ArrayRest];

ArrayRest[4] = 1;

//console.log(ArrayRest, ArrayRestCopiato);

let ArrayRest2 = [1, 1, 1];

let ArrayRestUnito = [...ArrayRest, ...ArrayRest2];

console.log(ArrayRestUnito);

let ogg = {
    nome : "Marco",
    cognome : "Cianci",
    eta : 25
}

let ogg2 = {...ogg, mansione : "Web Dev"};
console.log(ogg2);

let sommaNumeri = (...numbers) => {
    let somma = 0;
    numbers.forEach((item) => {
        somma += item;
    }) 
    return somma;
}

console.log(sommaNumeri(1, 1, 1, 1, 1)); //5
console.log(sommaNumeri(1, 1, 1)); //3

let VariabiliERest = [1, 2, 3, 4, 5];

let [n1, n2, ...rest] = VariabiliERest;

console.log(n1, n2, rest);

let ogg = {
    nome : "Marco",
    cognome : "Cianci",
    eta : 25,
    mansione : "Web Dev",
    città : "Roma",
    CAP : "00162"
}                                                    

let {nome, cognome, ...rest} = ogg;
console.log(nome, cognome, rest);

let ogg = {
    nome : "Marco",
    cognome : "Cianci",
    eta : 25,
    mansione : "Web Dev",
    città : "Roma"
}  

let json = JSON.stringify(ogg);

console.log(json);

let a = "[1, 2, 3]";

a = JSON.parse(a);

console.log(a);

let persone = '[{"nome" : "Marco", "eta" : 25},{"nome" : "Luca", "eta" : 30}]';

persone = JSON.parse(persone);
console.log(persone);

let nuovaPersona = {nome : "Lucia", eta : 20};
persone.push(nuovaPersona);

persone = JSON.stringify(persone);
console.log(persone);

let nomeL = "Marco";

let cognomeL = "Cianci";

let etaL = 25;

let cittaL = "Roma";

let nomeEcogome = `Il nome completo è ${nomeL} ${cognomeL}`;

console.log(nomeEcogome);

let strMultilinea = `Nome: ${nomeL} 
Cognome: ${cognomeL} 
Età: ${etaL} 
Città: ${cittaL}`;

console.log(strMultilinea);

let funzioneLiteral = (ogettoPersona) => {
    let str =
        `Nome: ${ogettoPersona.nome}
Cognome: ${ogettoPersona.cognome}
Età: ${ogettoPersona.eta}
Città: ${ogettoPersona.citta}`
    return str;
}

let personaLiteral = {
    nome: "Marco",
    cognome: "Cianci",
    eta: 25,
    citta: "Roma"
}

console.log(funzioneLiteral(personaLiteral));

let numC = 10;
let strC = "Prova";
let arrayC = [1, 2, 3, 4, 5];
let oggC = {
    prova1: "Prova",
    prova2: "Stampa"
}
let boolC = true;

console.log(numC, strC, arrayC, oggC, boolC);

if (numC > 10) {
    console.error("Numero troppo alto")
} else if (numC <= 10) {
    console.warn("Numero potrebb essere meglio")
};

console.table(oggC);

console.log("Messaggio all'esterno del gruppo");
console.group();
console.log("Primo messaggio del gruppo");
console.log("Secondo messaggio del gruppo");
console.groupEnd();
console.log("Messaggio all'esterno dal gruppo");

function mex () {
    console.log("Ciao Mondo!");
}

setTimeout(mex, 5000);

setInterval(mex, 2000);

let int = setInterval(() => console.log("Messaggio"), 1000);

setTimeout(() => {clearInterval(int)}, 5000);

function dividi (a,b) {
    try {
        if (b === 0) {
            throw new Error("Il divisore è uguale a zero");
        }
        let n = a/b;
        console.log(`Il risultato è: ${n}`);
    } catch (error) {
        console.error(error.message);
    }
}

dividi(10,0);
dividi(10,2);

function maiusc(str) {
    console.log(str);
    try {
        if (typeof str != "string") {
            throw new TypeError("La variabile non è una stringa");
        }
        if (!str) {
            throw new Error("Errore generico");
        }
        let newS = str.toUpperCase();
        return `La stringa in maiuscolo è ${newS}`;
    } catch (error) {
        console.error(error.message);
    }
}

let stringa = "aa";
console.log(maiusc(stringa));
maiusc(2);

function fine () {
    try {
        console.log("Ok");
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log("Operazione completata");
    }
}

fine();

function eseguiOperazione(a, b, callback) {
    let risultato = a + b;
    console.log("Risultato della somma:", risultato);
    callback();
}

eseguiOperazione(5, 3, () => {
    console.log("Callback eseguito");
});

//-----------------------------

function eseguiOperazione(a, b, callback) {
    let risultato = a + b;
    callback(risultato);
}

eseguiOperazione(5, 3, (risultato) => {
    console.log("Risultato della somma:", risultato);
});

//-------------------------------

function primaOperazione(a, b, callback) {
    let risultato = a + b;
    console.log("Risultato della prima operazione:", risultato);
    callback(risultato);
}

function secondaOperazione(risultato, callback) {
    let nuovoRisultato = risultato * 2;
    console.log("Risultato della seconda operazione:", nuovoRisultato);
    callback();
}

primaOperazione(5, 3, (risultato) => {
    secondaOperazione(risultato, () => {
        console.log("Callback finale eseguito");
    });
});

function ritarda(condizione) {
    return new Promise((risolvi, rifiuta) => {
        setTimeout(() => {
            if (condizione) {
                risolvi("Messaggio");
            } else {
                rifiuta("Errore");
            }
        }, 2000);
    });
}

ritarda(false).then((mex) => {
    console.log(mex);
}).catch((errore) => {
    console.error(errore)
});

let promessa = new Promise ((resolve, reject) => {
    let ok = false;

    if (ok) {
        resolve("Fatto")
    } else {
        reject("Errore")
    }
});

promessa.then ((risultato) => {
    console.log(risultato)
}).catch((err) => {
    console.error(err)
}).finally (console.log("Operazione conclusa"));

let promessaNumero = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

promessaNumero.then((val) => {
    if (val % 2 == 0) {
        console.log("Il numero è pari")
    } else {console.log("Il numero è dispari")}
    return val;
}).then((val) => {
    if (val % 2 == 0) {
        console.log("Il numero è pari")
    } else {console.log("Il numero è dispari")}
    return val*2;
}).then ((val) => {
    if (val % 2 == 0) {
        console.log("Il numero è pari")
    } else {console.log("Il numero è dispari")}
    return val + 3;
}).then((val) => {
    console.log(val)
})

function promiseNumeroCasuale () {
    return new Promise ((resolve, reject) => {
        let num = Math.random() * 100;

        if (num > 50) {
            resolve(num);
        } else if (num < 50) {
            reject("Errore");
        }
    }
)}

promiseNumeroCasuale().then((val) => {
    console.log(val)
}).catch((err) => {
    console.error("Errore")
})

function promiseErrore () {
    return new Promise ((resolve, reject) => {
        let ok = true;

        if (ok == false) {
            reject(new Error("Errore"));
        } else {
            resolve("Successo")
        }
    })
}

promiseErrore().catch(err => {
    console.error(err.message);
}).then((mex) => {
    console.log(mex)
})*/

function prima() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
} 

function seconda() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 5000);
    })
} 

Promise.all([prima(), seconda()]).then((val) => {
    console.log(val);
})
