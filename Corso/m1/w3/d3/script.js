//////////////////////////////////////////////////////////////////////
//OOP

// UTILIZZIAMO CONSTRUCTOR
{
  let obj = {}; // nuovo stile

  let objOld = new Object(); // vecchio stile

  let persona = {
    nome: "Mario",
    cognome: "ROssi",
    anni: 30,
  };

  // funzione costruttore!
  function Persona(n, c) {
    this.nome = n;
    this.cognome = c;
    this.cittadinanza = "Italiana"; // tutti gli ogggetti creati da questa funzione avranno cittadindanza
    this.presentazione = () => {
      console.log(`Ciao! mi chiamo ${this.nome} ${this.cognome}!`);
    };
  }

  let mario = new Persona(); // non inserisco i dati perche gli voglio mettere dopo
  mario.nome = "Mario";
  mario.cognome = "Rossi";
  mario.presentazione(); // this puntera a mario

  let lorenzo = new Persona("Lorenzo", "Trozzo"); // passo imediatamente i valori in fase di istanziamento
  console.log(lorenzo); // ho creato un oggetto di nome lorenzo
  lorenzo.presentazione(); // this puntera a lorenzo!
}
console.log(
  "=================================================================================================="
);
// nuovo blocco! UTILIZZIAMO CLASS!
{
  // è una funzione che
  // verrà lanciata in fase di istanziamento all'oggetto!
  class Utente {
    constructor(n, c, u = "Utente") {
      this.nome = n;
      this.cognome = c;
      this.ruolo = u;
      console.log(`il nuovo utente ${n} ${c} è stato creato!`); // constrctor configura i parametri in ingresso, ma èè un metodo lanciato in automaitca qunado viene istanziato un oggeto! quindi spara in automatico il log in console
      this.presentazione(); // in fase di istanziamento lancio il metodo presentazione!
    }
    presentazione() {
      console.log(`Ciao! mi chiamo ${this.nome} ${this.cognome}!`);
    } // no arrow function! e keyword function anche non si mettte
  }

  let mario = new Utente("Mario", "Rossi");
  let lorenzo = new Utente("Lorenzo", "Trozzo");

  // altra classe che estende unaltra classe

  class Admin extends Utente {
    constructor(n, m, t) {
      // costruttore di Admin ! sia ladmin che utente hanno n e c! t devo metterlo perche super non ha t
      super(n, m, "Admin"); // super è un richiamo al costruttore dell'utente! quindi avrà gli stessi parametri di Utente! il terzo parametro di Utente, nel super() è fiso ad 'Admin' è stata settata diversamente ( default value)
      this.titolo = t;
    }
  }

  let Amministratore = new Admin("Lorenzo", "Trozzo", "Capo dell'Universo");
  let Amministratore2 = new Admin("Raffaele", "Caravetta", "Capo del capo");
  console.log(Amministratore); // è identica a quella sopra! ha ereditato tutto! class Utente diventa un prototipo!
  // admin ricalca il modello di utente!
  Amministratore.presentazione(); // posso richiamare i metodi della classe padre!

  ///// altra classe che estende una classe gia estesa!
  console.log(
    "=====================================================================================0"
  );
  class SuperAdmin extends Admin {
    constructor(n, m) {
      super(n, m, "dev"); // richiamo il padre! cioe Admin cambiando il terzo parametro!
    }
  }

  let superAministratore = new SuperAdmin("Valerio", "Pirolli");
  console.log(superAministratore); // erditato tutto dall'admin ! pure il titolo che ora è dev
}
