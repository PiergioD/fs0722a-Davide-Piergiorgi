// interface-> è un modo per definire dei type personalizzati
// interface-> è una sorta di vincolo di contratto che stabilisce come un oggetto puo interagire con un altro oggetto

// interafce-> definisce i membri che una classe deve avere cosi che gli oggetti che devono interagire sanno che proprietà/metodi chiamare

interface IPersona {
  nome: string;
  cognome: string;
  visualizzaNomeCognome(): string;
}

// una classe che vuole interagir con l'interfaccia deve "aderire al contratto" e cioe avere nome,cognome,e metodo visualizzanomecognome

class Persona implements IPersona {
  // la classe persona dichiara di implementare l'interfaccia Iperson tramite la kkeyword implements
  nome: string;
  cognome: string;
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }

  visualizzaNomeCognome(): string {
    return this.nome + " " + this.cognome;
  }
}

// implemento una proprieta non prevista dall'interfaccia
enum Materie {
  Storia,
  Informatica,
  Matematica,
  HTML,
  Css,
  Javascript,
}

/*
class Studente implements IPersona {
  nome: string;
  cognome: string;
  materie: Materie[];
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.materie = []; // implemento una proprieta non prevista nell0interfaccia(posso perche l'interfaccia deifinisce i membri minimi di una classe)
  }
  visualizzaNomeCognome(): string {
    return this.nome + " " + this.cognome;
  }
}
*/

// posso implementare piu intergacce contemporaneeamente

interface IStudio {
  materie: Materie[];
}
/*
class Studente implements IPersona, IStudio {
  nome: string;
  cognome: string;
  materie: Materie[];
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.materie = []; // implemento una proprieta non prevista nell0interfaccia(posso perche l'interfaccia deifinisce i membri minimi di una classe)
  }
  visualizzaNomeCognome(): string {
    return this.nome + " " + this.cognome;
  }
}
*/
// typescript prevede l'estendibilita delle interfacce -> definiamo una nuova interfaccia ereditante le caratteristiche definite in un altra interefaccia

interface IStudente extends IPersona {
  materie: Materie[];
}

class Studente implements IStudente {
  nome: string;
  cognome: string;
  materie: Materie[];
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.materie = []; // implemento una proprieta non prevista nell0interfaccia(posso perche l'interfaccia deifinisce i membri minimi di una classe)
  }
  visualizzaNomeCognome(): string {
    return this.nome + " " + this.cognome;
  }
}
