console.log(document);
const $paragraph = document.getElementById("paragraph");
const $paragraph1 = document.querySelector("p");
const $paragraph2 = document.getElementById("innerT");

//form elements
const $form = document.querySelector("#form");
const $nomeForm = $form.querySelector('input[name="nome"]');
const $cognomeForm = $form.querySelector('input[name="cognome"]');
const $formButton = document.querySelector("#form-btn");

const state = {
    nomeUtente: 0,
    cognomeUtente: 0
}

//---------------------------------------

$paragraph2.innerText = "Testo aggiunto con Javascript";
$paragraph2.style.backgroundColor = "red";
$paragraph2.style.fontSize = "20px";
$paragraph2.innerHTML += "<br><button type='button'>Clicca qui</button>";

let ul = document.createElement("ul");
document.body.append(ul);

for (let i = 0; i<5; i++) {
    let li = document.createElement("li");
    li.innerText = "Menu " + [(i + 1)];
    ul.append(li);
}

//------------------------------------

$form.addEventListener("submit", (event) => {
    const entries = new FormData(event.target);
    const values = Object.fromEntries(entries);
    nomeUtente = values.nome;
    cognomeUtente = values.cognome;

    if (nomeUtente== "" || cognomeUtente == "") {
        event.preventDefault();
        alert("Compila tutti i campi prima di inviare");
    }
})