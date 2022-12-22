"use strict";
// interfaccia per classe abbigliamento

// classe per creazione oggetto nella chiamata fetch
var Abbigliamento = /** @class */ (function () {
  function Abbigliamento(
    codprod,
    collezione,
    capo,
    modello,
    quantita,
    colore,
    prezzoivaesclusa,
    prezzoivainclusa,
    disponibile,
    saldo,
    img
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
  Abbigliamento.prototype.getSaldoCapo = function () {
    return (this.prezzoivaesclusa * this.saldo) / 100;
  };
  Abbigliamento.prototype.getAcquistoCapo = function () {
    var acquisto1 = this.prezzoivainclusa - this.getSaldoCapo();
    console.log(
      "Il capo "
        .concat(this.capo, ", modello ")
        .concat(this.modello, " della collezione ")
        .concat(this.collezione, ", ha uno sconto del ")
        .concat(this.saldo, "$")
    );
    console.log(
      "Il capo "
        .concat(this.capo, ", modello ")
        .concat(this.modello, " della collezione ")
        .concat(this.collezione, ", ha un prezzo ")
        .concat(this.prezzoivainclusa, "$ scontato del ")
        .concat(this.saldo, "%. Il totale sar\u00E0 ")
        .concat(acquisto1, "$")
    );
    return acquisto1;
  };
  return Abbigliamento;
})();
// funxione pere creare card in display
function renderCapo(data) {
  var container = document.getElementById("container");
  var html = '<div class="card col-lg-3 m-2">\n  <img\n    src="'
    .concat(
      data.img,
      '" class="w-50"\n    alt="imgVestito"\n  />\n  <div class="card-body row p-2">\n    <h5 class="card-title">'
    )
    .concat(data.capo, '</h5>\n    <p class="card-text col-6">Collezione: ')
    .concat(
      data.collezione,
      '</p>\n    <p class="card-text col-6">Quantit\u00E0 Disponibile: '
    )
    .concat(
      data.quantita,
      '</p>\n    <p class="card-text col-6">Reperibilit\u00E0: '
    )
    .concat(
      data.disponibile,
      '</p>\n    <p class="card-text col-6">Prezzo Originario: '
    )
    .concat(
      data.prezzoivainclusa,
      '$</p>\n    <p class="card-text col-6 sconto"> \n      </p>\n    <p class="card-text col-6 prezzoScontato"></p>\n  </div>\n</div>'
    );
  container.insertAdjacentHTML("beforeend", html);
}

// funzione async per la chiamata fetch
async function loadJson() {
  let url = "./Abbigliamento.json";

  let response = await fetch(url);
  let resp = await response.json();
  return resp;
}

async function chiamataFetch() {
  try {
    await loadJson().then((data) => {
      console.log(data);
      data.forEach((element) => {
        let myCapo = new Abbigliamento();

        myCapo.codprod = element.codprod;
        myCapo.collezione = element.collezione;
        myCapo.colore = element.colore;
        myCapo.quantita = element.quantita;
        myCapo.prezzoivaesclusa = element.prezzoivaesclusa;
        myCapo.prezzoivainclusa = element.prezzoivainclusa;
        myCapo.disponibile = element.disponibile;
        myCapo.capo = element.capo;
        myCapo.saldo = element.saldo;
        myCapo.img = element.img;
        myCapo.modello = element.modello;
        console.log(myCapo);
        renderCapo(element);

        let sconto = document.querySelector(".sconto");
        let acquisto = document.querySelector(".prezzoScontato");
        sconto.innerHTML = `Sconto:${myCapo.getSaldoCapo().toFixed(2)}%`;
        acquisto.innerHTML = `Prezzo Scontato:${myCapo
          .getAcquistoCapo()
          .toFixed(2)}$`;
      });
    });
  } catch (err) {
    console.error(`${err}!!!!`);
  }
}

//chiamo la funzione
chiamataFetch();
