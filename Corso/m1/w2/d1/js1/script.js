"use strict mode";

//////////////////////////////////////////////////////////////////////
// Direttive di output

//alert('mostra questa scritta')
// ciccia fuori na scritta fastidiosa( un pop-up)

console.log("Mostra questa stringa");
console.log("%c mostra questa scritta", "color:red;background-color:blue");
// mostra in console la stringa scritta!
// utile il console per debugging e controllare il valore di variabili!
document.getElementById("test").innerHTML = "prova"; // scrivo su html nel id test prova
document.getElementById("test").innerHTML = "<b>Prova</b>"; // posso scrivere html! stesso procedimento del dom sopra ma me lo mette in grassetto con <b>

// se scrivo in div con id delle cose: con questi comandi me li elimina perche lo script di javascript sovrascrive

setTimeout(() => {
  document.querySelector("#test").innerHTML = "ciao";
}, 1000);

// trova all''interno di html l'elemento  id #test e scrivici ciao dopo 1 secondo!
// il tag sript è obbiligatiorio metterlo in basso poco prima della chiusura del body! Al caricamento della pagina,js è capace solo di trovare i tag sopra il tag script.
// scrive nella pagina ciao

document.write("ciao"); // aggiunge nel documento html dopo lo script!
// con querySelector è meglio perche raggiunge una parte specifica della pagina!
// potrebbe eliminare il contenuto della pagina! attenzione!

let html = '<div class="prova">Prova1</div>';
console.log(html);
// mi crea un div con dentro prova1 nel html!
// nella pagina web esce fuori prova1

/*
String.prototype.isUpperCase = function () {
  if (String !== String.toUpperCase()) return false;
};

function isUpperCase(str) {
  if (str === str.toUpperCase()) return true;
  else return false;
}
*/
