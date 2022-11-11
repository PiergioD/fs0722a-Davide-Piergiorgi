/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Davide",
  surname: "Piergiorgi",
  age: 28,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

// controlle se ce l'eliminazione
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["javascript"];

// check dell'oggetto
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
//  non è un linguaggio di programmazione ma è solo un elemento da aggiungere
me.skills.push("Html");

// check oggetto
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

// check oggetto
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.trunc(Math.random() * 6) + 1;
//chiamo funzione
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (n1, n2) => {
  // caso se n1 è maggiore
  if (n1 > n2) console.log(`Numero a: ${n1} è maggiore di Numero b: ${n2}`);
  // caso se n2 è maggiore
  if (n2 > n1) console.log(`Numero b: ${n2} è maggiore di Numero a: ${n1}`);
  // caso se sono entrambi uguali
  if (n1 == n2) console.log("Sono pari!");
};

// chiamo la funzione
whoIsBigger(2, 4);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (str) => console.log(str.split(" "));
// chiamo la funzione
splitMe("Banana in Pigiama");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, bool) => {
  // se bool è true
  if (bool) {
    console.log(str.slice(1, str.length));
  }
  // se bool è false
  else {
    console.log(str.slice(0, -1));
  }
};

// chiamo la funzione
deleteOne("TopoGigio", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (str) => console.log(str.replace(/[0-9]?/g, ""));

// chiamo funzione
onlyLetters("I have 4 dogs");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str) => {
  // regex per check email
  let regexPerMail =
    /^(([^<>;()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  // se test è vero--> mail valida
  if (regexPerMail.test(str)) {
    console.log(`${str} è una email valida!`);
  } else {
    // se false --> non valida
    console.log(`${str} NON è una email valida!`);
  }
};

// chiamo la funzione
isThisAnEmail("bananainpigiama");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  // setto la data
  let now = new Date();
  console.log(now);
  // mi da il giorno corrente della settimana
  console.log(now.getDay());
};

//chiamo la funzione
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (n) => {
  // creo oggetto literal con sum e array vuoto
  let obj = {
    sum: 0,
    values: [],
  };
  // ciclo for per creare array coi valori
  for (let i = 0; i < n; i++) {
    // roll è un numero casuale
    const roll = dice();
    // pusho nell'array dei valori casuali
    obj.values.push(roll);
    // sommo quei valori casuali
    obj.sum += roll;
  }
  // in console l'oggetto creato
  console.log(obj);
};

// chiamo la funzione
rollTheDices(dice());

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {
  // millisecondi in un giorno
  let milSecondPerDay = 1000 * 60 * 60 * 24;
  // creo una data di oggi
  let oggi = new Date();
  // creo una data utilizzando il parametro
  let giornoDaComp = new Date(date);
  // trovo la differenza dividendo per i millesecondi al giorno
  let differenza = Math.floor((giornoDaComp - oggi) / milSecondPerDay);
  // crep stringa in console
  console.log(
    `Ci sono ${differenza} giorni di differenza tra "${oggi}" e "${giornoDaComp}"`
  );
};

// richiamo la funzione con una stringa di data fittizzia
howManyDays("12/25/2022");
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
//dichiaro una data nel global scope
let oggi = new Date();
console.log(oggi);

const isTodayMyBirthday = (dataOggi) => {
  // setto il giorno del mio compleanno
  let myBirthday = new Date("02/06/2022");
  // se oggi è ugualee a myBirthday --> true
  if (myBirthday === dataOggi) console.log("E' il mio compleanno!");
  // non è il mio compleanno--> false
  else {
    console.log("Non è il mio compleanno!");
  }
};
// chiamo la funzione
isTodayMyBirthday(oggi);

///////////////////////////////////////////////////////////////////////////////////////////////
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (obj, str) => {
  // ciclo per ogni proprietà dell'oggetto
  for (let prop in obj) {
    // se la proprieta dell'oggetto è uguale a stringa, rimuovilo
    if (obj[prop] === str) {
      delete obj[prop];
    }
  }
  // carica in console
  console.log(obj);
};

// chiamo la funzione con un oggetto inventato
objecto = {
  name: "banana",
  preposizione: "in",
  locazione: "pigiama",
};

deleteProp(objecto, "banana");
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const piuRecente = (arr) => {
  let recente = arr.reduce((previous, current) => {
    // se year del corrente è maggiore del precedente riporta corrente
    if (previous.Year < current.Year) return current;
    // caso contrario, riporta il precedente
    else return previous;
  });
  // carico in console il risultato
  console.log(recente);
};
piuRecente(movies);
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (arr) => console.log(arr.length);
//chiamo la funzione
countMovies(movies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (arr) => console.log(arr.map((ele) => ele.Year));
// chiamo la funzione
onlyTheYears(movies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (arr) =>
  console.log(arr.filter((ele) => ele.Year < 2000));
// chiamo la funzione
onlyInLastMillennium(movies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (arr) => {
  // controllo se array in entrata è giust
  console.log(arr);
  let som = arr.reduce((acc, ele) => (acc += Number(ele.Year)), 0);
  // trasformo stringa Year in numero e aggiungo allaccumulatore settato a 0.
  // faccio console.log della variabile
  console.log(som);
};
// chiamo la funzione
sumAllTheYears(movies);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (str) =>
  console.log(
    movies.find((ele) => ele.Title.toLowerCase().includes(str.toLowerCase())) // potevo usare includdes che torna booleano
  );
// chiamo la funzione
searchByTitle("The Avengers");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (str) => {
  // creo obj con i due array vuoti
  let obj = { match: [], unmatch: [] };

  // per ogni elemento dell'array movies :
  movies.forEach((ele) => {
    // se il titolo contiene stringa
    if (ele.Title.toLowerCase().includes(str.toLowerCase())) {
      // pushalo nel array vuoto match
      obj.match.push(ele);
    } else {
      // pusha gli altri nel unmatch
      obj.unmatch.push(ele);
    }
  });
  // riporta in console obj
  console.log(obj);
};

//richiamo funzione con un esempio
searchAndDivide("Lord of the Flies");
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(movies);
const removeIndex = (n) => {
  // creo copia dell'array
  let copiaArr = [...movies];
  // uso splice per eliminare dato elemento
  copiaArr.splice(n, 1);
  // carico array senza le'lemento indicato
  console.log(copiaArr);
};

// richiamo funzione
removeIndex(6);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selContainer = () => {
  return document.getElementById("container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selTd = () => {
  return document.querySelectorAll("td");
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const consoleLogTagTd = () => {
  // seleziono tag
  let tdTags = document.querySelectorAll("td");
  // per ogni elemento stampo in console innerHtml
  tdTags.forEach((ele) => console.log(ele.innerHTML));
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const bgColorLink = () => {
  // seleziono tutti i link tag a
  let links = document.querySelectorAll("a");
  // array creato con selectorAll dico di dare backgroundcolor rosso
  links.forEach((ele) => (ele.style.backgroundColor = "red"));
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const creoLi = () => {
  // seleziono mylist
  let lista = document.getElementById("myList");
  // ci attacco elemento lista banana
  lista.innerHTML += "<li>Banana</li>";
};
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const remoLi = () => {
  // aggancio lista
  let lista = document.getElementById("myList");
  // svuoto lista? svuotare devo eliminare i figli?
  lista.innerHTML = "";
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addCSs = () => {
  // aggancio i tag tr
  let tags = document.querySelectorAll("tr");
  // array creatomi aggiungo classe test
  tags.forEach((ele) => ele.classList.add("test"));
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

halfTree(4);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = (n) => {
  // se n diviso per se stesso da 0 e se n è dispari
  if (n % n === 0 && n % 2 == 1) {
    // stampo in console numero primo
    console.log(`${n} è un numero primo!`);
  } else {
    // stampo in console non eè un numero primo
    console.log(`${n} NON è un numero primo!`);
  }
};

isItPrime(Math.floor(Math.random() * 30));
