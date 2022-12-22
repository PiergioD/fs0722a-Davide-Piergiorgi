// interfaccia per classe abbigliamento

interface IAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
  img: string;
  getSaldoCapo(): number;
  getAcquistoCapo(): number;
}

// classe per creazione oggetto nella chiamata fetch
class Abbigliamento implements IAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
  img: string;
  constructor(
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number,
    img: string
  ) {
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
    this.img = img;
  }

  getSaldoCapo(): number {
    return (this.prezzoivaesclusa * this.saldo) / 100;
  }

  getAcquistoCapo(): number {
    let acquisto1 = this.prezzoivainclusa - this.getSaldoCapo();
    console.log(
      `Il capo ${this.capo}, modello ${this.modello} della collezione ${this.collezione}, ha uno sconto del ${this.saldo}$`
    );
    console.log(
      `Il capo ${this.capo}, modello ${this.modello} della collezione ${this.collezione}, ha un prezzo ${this.prezzoivainclusa}$ scontato del ${this.saldo}%. Il totale sarà ${acquisto1}$`
    );

    return acquisto1;
  }
}

// funxione pere creare card in display
function renderCapo(data: any) {
  const container = document.getElementById("container") as HTMLDivElement;
  const html = `<div class="card col-lg-3 m-2">
  <img
    src="${data.img}" class="w-50"
    alt="imgVestito"
  />
  <div class="card-body row p-2">
    <h5 class="card-title">${data.capo}</h5>
    <p class="card-text col-6">Collezione: ${data.collezione}</p>
    <p class="card-text col-6">Quantità Disponibile: ${data.quantita}</p>
    <p class="card-text col-6">Reperibilità: ${data.disponibile}</p>
    <p class="card-text col-6">Prezzo Originario: ${data.prezzoivainclusa}$</p>
    <p class="card-text col-6 sconto"> 
      </p>
    <p class="card-text col-6 prezzoScontato"></p>
  </div>
</div>`;

  container.insertAdjacentHTML("beforeend", html);
}

export {};
