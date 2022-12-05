// classe oggetto
function Persona(nome, cognome) {
  this.name = nome;
  this.cognome = cognome;
  // metodo per l'eta
  getAge = function (data) {
    let oggi = new Date();
    let compleanno = new Date(data);
    let età = oggi.getFullYear() - compleanno.getFullYear();
    return età;
  };
}

// variabili
let form = document.querySelector("form");
let nameInput = document.getElementById("nome");
let surnameInput = document.getElementById("cognome");
let dataNascitaInput = document.getElementById("data-nascita");
//let btn = document.getElementById("btn-crea");
let corpoCella = document.getElementById("corpo-cella");

// funzione per elemento html nella tabella!
function createElement(nome, cognome, data) {
  corpoCella.innerHTML += `<tr>
    <td scope="row">${nome}</td>
    <td>${cognome}</td>
    <td>${data}</td>
  </tr>`;
}

// schiaccio pulsante! mi crea elemento tabella!
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fd = new Persona(nameInput.value, surnameInput.value);
  createElement(fd.name, fd.cognome, getAge(dataNascitaInput.value));
});
