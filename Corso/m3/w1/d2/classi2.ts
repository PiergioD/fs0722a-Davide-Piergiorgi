// ridefinire il metodo e invocarlo con super.nomemetodoclassebase

class Veicolo1 {
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

class Cars1 extends Veicolo {
  constructor(marca: string, modello: string) {
    super(marca, modello, "auto");
  }
  dettagliVeicolo(): string {
    console.log("dettagli auto:");
    return super.dettagliVeicolo();
  }
}

console.log(jaguar.dettagliVeicolo);
