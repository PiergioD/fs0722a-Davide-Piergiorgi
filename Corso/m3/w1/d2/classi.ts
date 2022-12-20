// typescript suppporta l'ereditarieta delle  classi
// la keyord extends una classe base
// nel costruttore della classe derivata useremo la keyword super() per invocare il costruttore della classe base

class Veicolo {
  modello: string;
  marca: string;
  tipoVeicolo: string;
  constructor(marca: string, modello: string, tipoVeicolo: string) {
    this.marca = marca;
    this.modello = modello;
    this.tipoVeicolo = tipoVeicolo;
  }

  dettagliVeicolo(): string {
    return `${this.tipoVeicolo} - ${this.marca} - ${this.modello}`;
  }
}

class Cars extends Veicolo {
  constructor(marca: string, modello: string) {
    super(marca, modello, "auto");
  }
}

class Motorbike extends Veicolo {
  constructor(marca: string, modello: string) {
    super(marca, modello, "moto");
  }
}

const jaguar = new Cars("jaguar", "F-type");
const ducati = new Motorbike("ducati", "panigale v4");

console.log(jaguar instanceof Cars); // mi da true! è vero che è istanza!
console.log(ducati instanceof Motorbike);
console.log(ducati instanceof Cars); // mi darà false
