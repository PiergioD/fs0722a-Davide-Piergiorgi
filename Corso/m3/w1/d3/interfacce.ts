/*il type system è di tipo strutturale(structural type sistem).
Il compiler quando fa il controllo / la comparazione dei tipi di dato si basa sulla struttura/forma */

function inviaMessaggio(msg: { email: string; messaggio: string }) {
  mailSender.sendTo(msg.email, msg.messaggio); // il parametro indica che viene accettato un oggetto che ha almeno le proprietà email e messaggio
  // al netto che non creo un oggetto mailSender
}

var mioMessaggio = { email: "mario.rossi@epicode.it", messaggio: "buongiorno" };
inviaMessaggio(mioMessaggio); // questa chiamata è corretta perche ci sono i parametri attesi

var mioMessaggio = { messaggio: "buongiorno" };
inviaMessaggio(mioMessaggio); // questa chiamata genera errore perche quando compilo l'ogggetto non contiene la proprieta email

//-_> una volta che dichiariamo una struttura per il parametro della funzione ts verifica che effettivamente venga passato un oggetto con quella struttura

//_> typescript consente di definire una interfaccia che definisce la struttura del nostro parametro

interface Messaggio {
  email: string;
  messaggio: string;
}
// interface consente di definire il tipo di dato (messaggio nel nostro caso), typescript quando compila verifica la struttura
// in questo modo poi potremo utlizzare messaggio come se fosse un tipo di dato predefinitivo(ad esempio riutilizzarlo nella nostra app)
function inviaMessaggio1(msg: Messaggio) {
  mailSender.sendTo(msg.email, msg.messaggio);
}

// la struttura dichiarata dall'interfaccia rappresenta gli elementi minimi che un oggetto deve avere

var mioMessaggio = {
  email: "mario.rossi@epicode.it",
  messaggio: "buongiorno",
  data: new Date(),
}; // il fatto che la proprieta data non è prevista non pregiudica la compatibilità dell0oggetto col tipo previsto

inviaMessaggio(mioMessaggio);
// possiamo dentro interface definire una struttua con degli elementi opzionali

interface Messaggio {
  email: string;
  nomeDestinatario?: string;
  oggetto?: string;
  messaggio: string;
} // elementi opzionali-> sono accettati se sono presenti, ma non da errore se sono assenti

// le interfacce non descrivono solo oggetti ma anche altri elementi del linguaggio
// ad esempio definisco una funzione numerica che opera su valori numerici

interface FunzionesuNumeri {
  (x: number, y: number): number; // prendo due valori numerici come parametro e rersituisco un numero
}

// faccio una funzione del tipo appena dichiarato
var somma: FunzionesuNumeri;
somma = function (a: number, b: number) {
  // dichiarare il tipo non ci obbliga a usare gli stessi nomi dei parametri
  return a + b; // l'unico cosa importante è che tipi dei parametri siano corrispondenti
};

// possiamo anche dichiarare delle interfacce che descrviono degli array
interface ArrayDiStringhe {
  [index: number]: string; // definisco il tipo del'indice(number) e il tipo di ciascun  elemento(string)
}

var x: ArrayDiStringhe = ["uno", "due", "tre"];

// per indice dell'array oltre al ipo number è previsto anche il tipo string
interface Dizionario {
  [index: string]: string;
}

var z: Dizionario;
z["chiave1"] = "valore1";
z["chiave2"] = "valore2";
// per indice i tipi di dati possibili sono solo number e string, per gli elementi dell'array possiamo usare qualsiasi tipo

// esempio aray di oggetti
interface ArraydiOggetti {
  [index: number]: { id: number; label: string };
}

var y: ArraydiOggetti = [
  { id: 1, label: "aaa" },
  { id: 2, label: "bbb" },
];
