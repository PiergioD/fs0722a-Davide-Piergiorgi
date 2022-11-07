[1, 2, 3, 4, 5, 6, 7].push(8);

// posso fare un array cosi! ma se devo fare modifiche mejo salvarlo in una variabile!

// creiamo una funzione che troa ed eliimina
let utenti = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zip: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zip: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zip: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

console.log(utenti[1]["id"]); // mi prende oggetto numeri 1 e mi tira fuoi il suo id

function trovaElimina(chiave, valore, array) {
  let arrayCopy = [...array]; // copio aray con spread
  let indice = arrayCopy.findIndex((e) => e[chiave] == valore);
  console.log(indice); // vai a cercare tuttli elementi(dell'array), trova indice il cui nome è uguale a LEanne Graham e restituiscimi il suo indice
  arrayCopy.splice(indice, 1); // eliminimo quell elemento con splice!
  return arrayCopy;
}
// e[chiave]--->e.id o anche e.name ecc(sono le proprieta degli ogggeti)
let utentiNew = trovaElimina("name", "Leanne Graham", utenti);
console.log(utentiNew);

// meotodo piu corto!
function trovaElimina2(chiave, valore, array) {
  return array.filter((e) => e[chiave] != valore);
} // elimino per esclusione

let utentiNew2 = trovaElimina2("website", "ramiro.info", utenti);
console.log(utentiNew2);
//array che contiene tutti tranne quelli che hanno website diverso da ramiro.info

// dato un array di oggetti, mi trova quello con l'id maggiore usando reduce
/*
let idAlto = utenti.reduce((previous, current) => {
  if (previous.id > current.id) {
    return previous;
  } else {
    current; // devo restituire l'utente! non solo id
  }
*/
// con ternary operator
//const idALto = utenti.reduce((previous,current)=> previous.id>current.id ? previous : current);
//}); // previous è laccumulatore!
// reduce lavora a coppie di valori!

// altro esempio con reduce!
let numeri = [1, 34, 5, 6, 74, 3];
let somma = numeri.reduce((p, c) => p + c);
// metodo alternativo per capire i passaggi --> console.log(`${p} +${c}=` + (p+c)) return p+c

/////////////////////////////////////////////////////////////////////////////////////////////////////
function ricerca() {
  // event listener sul campo di ricerca ogni volta che l'utente solleva il dito dpop aver scritto

  let divanimali = document.querySelectorAll("#tendina > div"); // div figli di tendina!
  // query selectorALL ritorna un array con una lista di HTMLelements

  for (let div of divanimali) {
    // ciclo div con i nomi di anili
    let nomeAnimale = div.textContent.toLowerCase(); // salvo il nome dell'animale in una var dopo averlo trasformato in caratteri min
    if (nomeAnimale.search(cerca.value.toLowerCase()) != -1) {
      div.style.display = "block"; // mostro l'animale, che potrebbe esssere stato nascosto precedentemente!
    } else {
      div.style.display = "none"; // nascondo l'animale
    } // se la parola digitata dall'utente non trova risconto nel nome dell'animale ho false!
  }
}

// input select e textArea vale .value
// text COntext in tag apertura chiusura di html
let cerca = document.querySelector("#cerca"); // seleziono campo di ricerca
let cercaBottone = document.querySelector("#cercaBtn");
cerca.addEventListener("keyup", ricerca);
cercaBottone.addEventListener("click", ricerca);

// keyup l'utente digita un carattere e solleva il dito dal mouse
//////////////////////////////////////////////////////////////////////////

let str = "ddd,GGG,kkkk,jjj,ggg";

console.log(str.replace(",", ".")); // mi rimpiazza solo il primo!
// usiamo regex!
console.log(str.replace(/,/g, ".")); //g è global! cerfcale tutte
console.log(str.replaceAll(",", ".")); // con replace all ancora piu facile
/// voglio mettere le GGG in minuscolo
console.log(str.replaceAll(/GGG/gi, "###")); // i è case insensitive!

console.log(str.split(",")); // elimino lestringhe

let animali = ["gatto", "cane", "tigre"];

console.log(animali.join(" ")); // separatore sarà , di default se no in sto caso è spazio!
////////////////////////////////////////////////////////

const reverseSeq = (n) => {
  arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  return arr
    .sort(function (a, b) {
      return b - a;
    })
    .pop();
};

console.log(reverseSeq(5));
