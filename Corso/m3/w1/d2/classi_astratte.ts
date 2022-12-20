// abastarct--> si basa su una key word abastract
// sono classi base che non possono essere istanziate
// devono avere almeno un metodo su cui farò dichiarazione senza che venga implementato

abstract class Vehicle {
  private colore: string; // accessibile solo all'interno della classe
  protected modello: string; // accessibile nella classe piu nelle estensioni
  protected marca: string;

  constructor(marca: string, modello: string, colore: string) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
  }
  // se non è dichiarato, è tutto public
  public vernicia(colore: string): void {
    this.colore = colore;
  }
  public coloreCorrente(): string {
    return this.colore;
  }

  public abstract dettagliVeicolo(): string;
}

class Automobile extends Vehicle {
  constructor(marca: string, modello: string, colore: string) {
    super(marca, modello, colore);
  }
  public dettagliVeicolo(): string {
    return `${this.marca}-${this.modello}`;
  }
}

// non posso crare una istanza di una classa astratta! mi da errore
//const veicolo = new Vehicle("jaguar", "f-type", "bianca");

// la figlia invece puo essere valorizzata
const bmw = new Automobile("jaguar", "f-type", "bianca");
console.log(jaguar.dettagliVeicolo);
// la classe astratta puo essere usata per essere li e non essere usata come password ecc
