/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
const function1 = function (str1, str2) {
  let str1Sl = str1.slice(0, 2);
  let str2Sl = str2.slice(-3);

  let strConc = str1Sl.concat(str2Sl);

  return console.log(strConc.toUpperCase());
};

function1("Banana", "Pigiama");
/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
const function2 = () => {
  arr = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(function2());
/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
const function3 = () => {
  arr = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(function3());

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

const function4 = function () {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * 101);
    arr.push(rand);
  }
  return arr;
};

console.log(function4());

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

/*
const function5 = (arr) => {
  pari = [];
  for (numeri of arr) {
    if (numeri % 2 == 0) {
      pari.push(numeri);
    }
  }
  return pari;
};
*/
//console.log(function5([3, 6, 5, 4, 7, 8, 9, 1, 10]));
const findEvenNumber = function (arr) {
  let evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArray.push(arr[i]);
    }
  }
  console.log(evenArray);
};

let array = [3, 4, 6, 2, 3, 6, 8, 10];

findEvenNumber(array);
/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

/*
const funzione6 = (arr) => {
  let sum = arr.reduce((acc, ele) => acc + ele);

  return sum;
};

console.log(funzione6([6, 3, 5, 7, 8, 73, 24]));
*/
const colCiclo = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    {
      sum += arr[i];
    }
  }
  console.log(sum);
};

let number = [6, 3, 5, 7, 8, 73, 24];

colCiclo(number);

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
const funzione7 = (arr) => {
  let arrSomm = arr.map((element) => element + 1);
  return arrSomm;
};

console.log(funzione7([2, 3, 4, 5, 6, 7, 8, 9]));
/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const funzione8 = (arr) => arr.map((ele) => ele.length);
console.log(funzione8(["EPICODE", "is", "great"]));
/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
const funzione9 = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  //for(let elemento of arr)
  //if(elemento%2==0)
  // let index= arr.indexOf(elemento)
  //arr.splice(index,1)
  return newArr;
};

console.log(funzione9([4, 5, 6, 2, 23, 6, 8, 4]));

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
/*
const funzione10 = () => {
  let arr = [];

  for (let i = 0; i <= 10; i++) {
    let random = Math.floor(Math.random() * 11);
    arr.push(random);
  }
  let set = new Set(arr);
  return set;
};

console.log(funzione10());
*/
const createRandomArrayWithoutDuplicates = function () {
  let arr = []; // dichiarato array vuoto

  for (let i = 0; i < 10; i++) {
    // per ogni elemento
    let added = false; // valore booleano per rimanere nel ciclo while
    while (!added) {
      // condizione del while che fa ripetere il ciclo finche quando nn viene inserito un elemento diverso dai precedenti
      let numbertoAdd = Math.ceil(Math.random() * 100); // inserito nella variabile un numero random tra 1 e 100
      if (!arr.includes(numbertoAdd)) {
        // VA A CONTROLLARE SE NELL'ARRAY NON E' PRESENTE IL NUMERO APPENA MESSO NELLA VARIABILE NUMBERTOADD
        arr.push(numbertoAdd); // se non è presente fa arr.push
        added = true; // esce da l ciclo quando un elemento viene aggiunto allarray e va a ripetere tutte le istruzioni per tutti gli elementi dellarray
      }
    } // finquando added è falso
  }
  console.log(arr);
};

createRandomArrayWithoutDuplicates();
/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

const funzione11 = (arr) => arr.reverse();

console.log(funzione11([3, 6, 7, 12]));

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log(movies);

const function12 = (arr) => {
  let piuBasso = arr.reduce((previous, current) => {
    if (previous.Year < current.Year) return previous;
    else return current;
  });

  console.log(piuBasso);
};
function12(movies);
/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const funzione13 = (arr) => console.log(arr.length);
funzione13(movies);
/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const funzione14 = (arr) => arr.map((elemento) => elemento.Title);

console.log(funzione14(movies));

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const funzione15 = (arr) =>
  arr.filter((elemento) => parseFloat(elemento.Year) > 2000);

console.log(funzione15(movies));

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const funzione16 = (arr, id) =>
  console.log(arr.find((elemento) => elemento.imdbID === id));
funzione16(movies, "tt2395427");
/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const funzione17 = (arr) => {
  let som = parseFloat(arr.reduce((acc, ele) => acc.Year + ele.Year));
  console.log(som);
};
// da NaN ! da finire
funzione17(movies);
/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
