// interfacciaa per i valori della classe
interface ITasse {
  redditoAnnuoLordo: number;
  codredd: number;
  tasseInps: number;
  tasseIrpef: number;
}

// classe astratta di partenza per ogni lavoratore--> ogni classe di lavoratore autonomo avrà un codredd che identificherà quanto avra da pagare di percentuale di tasse irpef e inps
abstract class Lavoratore implements ITasse {
  redditoAnnuoLordo: number;
  codredd: number;
  tasseInps: number;
  tasseIrpef: number;
  constructor(
    redditoAnnuoLordo: number,
    codredd: number,
    tasseInps: number,
    tasseIrpef: number
  ) {
    this.codredd = codredd;
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.tasseInps = tasseInps;
    this.tasseIrpef = tasseIrpef;
  }

  // metodo per prendere utile dal lordo da applicare alle tasse
  public getUtileTasse(spesa: number): number {
    return this.redditoAnnuoLordo - spesa;
  }
  // metodo calcolo per tasse inps
  public getTasseInps(utile: number): number {
    return (utile * this.tasseInps) / 100;
  }

  // metodo calcolo per tasse irpef
  public getTasseIrpef(utile: number): number {
    return (utile * this.tasseIrpef) / 100;
  }

  // metodo per calcolare redditto annuo netto
  public getRedditoAnnuoNetto(tassaIrpef: number, tassaInps: number): number {
    return this.redditoAnnuoLordo - (tassaIrpef + tassaInps);
  }
}

// figlio 1 di lavoratore
class InvestigatoreGenealogico extends Lavoratore {
  getTasseInps(utile: number): number {
    if (this.redditoAnnuoLordo >= 30000) {
      return (utile * 21) / 100;
    } else {
      return (utile * this.tasseInps) / 100;
    }
  }

  getTasseIrpef(utile: number): number {
    if (this.redditoAnnuoLordo >= 30000) {
      return (utile * 19) / 100;
    } else {
      return (utile * this.tasseIrpef) / 100;
    }
  }
}

// figlio 2 di lavoratore
class Vetraio extends Lavoratore {
  redditoAnnuoLordo: number;
  tasseInps: number;
  tasseIrpef: number;
  codredd: number;
  constructor(
    redditoAnnuoLordo: number,
    codredd: number,
    tasseInps: number,
    tasseIrpef: number
  ) {
    super(redditoAnnuoLordo, tasseInps, tasseIrpef, codredd);
    {
      this.tasseInps = tasseInps;
      this.tasseIrpef = tasseIrpef;
      this.codredd = codredd;
      this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
  }
}

// chiamate dei metodi
let eleuterio = new InvestigatoreGenealogico(12000, 1111, 13, 12);
let tasseUtiliEleuterio = eleuterio.getUtileTasse(1250);
console.log(tasseUtiliEleuterio);
let tasseInpsEleuterio = eleuterio.getTasseInps(tasseUtiliEleuterio);
console.log(tasseInpsEleuterio);
let tasseIrpefEleuterio = eleuterio.getTasseIrpef(tasseUtiliEleuterio);
console.log(tasseIrpefEleuterio);
let redditoNettoEleuterio = eleuterio.getRedditoAnnuoNetto(
  tasseInpsEleuterio,
  tasseIrpefEleuterio
);
console.log(redditoNettoEleuterio);

console.log("---------------------------------");
let mauriello = new InvestigatoreGenealogico(34000, 3333, 15, 13);
let tasseUtiliMauriello = mauriello.getUtileTasse(7000);
console.log(tasseUtiliMauriello);
let tasseInpsMauriello = mauriello.getTasseInps(tasseUtiliMauriello);
console.log(tasseInpsMauriello);
let tasseIrpefMauriello = mauriello.getTasseIrpef(tasseUtiliMauriello);
console.log(tasseIrpefMauriello);
let redditoNettoMauriello = mauriello.getRedditoAnnuoNetto(
  tasseInpsMauriello,
  tasseIrpefMauriello
);
console.log(redditoNettoMauriello);
console.log("--------------------------------------");
let brunoliegi = new Vetraio(24000, 2222, 14, 13);
let tasseUtilibrunoliegi = brunoliegi.getUtileTasse(2300);
console.log(tasseUtilibrunoliegi);
let tasseInpsbrunoliegi = brunoliegi.getTasseInps(tasseUtilibrunoliegi);
console.log(tasseInpsbrunoliegi);
let tasseIrpefbrunoliegi = brunoliegi.getTasseIrpef(tasseUtilibrunoliegi);
console.log(tasseIrpefbrunoliegi);
let redditoNettobrunoliegi = brunoliegi.getRedditoAnnuoNetto(
  tasseInpsbrunoliegi,
  tasseIrpefbrunoliegi
);
console.log(redditoNettobrunoliegi);
export {};
