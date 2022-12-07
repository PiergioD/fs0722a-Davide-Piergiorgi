// variabili
let dataArray = [
  { id: 1, nome: "Luca", cognome: "Rossi", classe: "A" },
  { id: 2, nome: "Luigi", cognome: "Verdi", classe: "A" },
  { id: 3, nome: "Mario", cognome: "Bianchi", classe: "A" },
  { id: 4, nome: "Piero", cognome: "Neri", classe: "A" },
  { id: 5, nome: "Paolo", cognome: "Rossi", classe: "A" },
  { id: 6, nome: "Sergio", cognome: "Verdi", classe: "A" },
  { id: 7, nome: "Gianno", cognome: "Bianchi", classe: "A" },
  { id: 8, nome: "Davide", cognome: "Neri", classe: "A" },
];
let bodyTabella = document.getElementById("tabella");
let btnPrimo = document.getElementById("btn_primo");
let btnUltimo = document.getElementById("btn_ultimo");
let btnSuccessivo = document.getElementById("btn_successivo");
let btnPrecedente = document.getElementById("btn_precedente");

// CLASSE DELLA PAGINAZIONE
class Pagination {
  constructor(items = [], pageSize = 2, currentPage = 1) {
    this.items = items;
    this.pageSize = pageSize;
    this.currentPage = currentPage;
  }
}

//creo oggetto con array e pagesize e currentpage
let data = new Pagination(dataArray);
console.log(data);

//event listeners su bottoni
btnSuccessivo.addEventListener("click", nextPage, false);
btnPrecedente.addEventListener("click", previousPage, false);
btnPrimo.addEventListener("click", firstPage, false);
btnUltimo.addEventListener("click", lastPage, false);

//FUNZIONI CALL BACK BOTTONI
function previousPage() {
  if (data.currentPage > 1) data.currentPage--;
  creaTabella();
}
//pagina successiva
function nextPage() {
  if (data.currentPage * data.pageSize < data.items.length) data.currentPage++;
  creaTabella();
}
//ultima pagina
function lastPage() {
  data.currentPage = Math.ceil(data.items.length / data.pageSize);
  creaTabella();
}
// prima pagina
function firstPage() {
  data.currentPage = 1;
  creaTabella();
}

// funzione per creare elemento tabello
function creaTabella() {
  let result = "";
  // i bottoni partono false.
  data.items
    .filter((row, index) => {
      let start = (data.currentPage - 1) * data.pageSize;
      let end = data.currentPage * data.pageSize;
      if (index >= start && index < end) return true;
    })
    .forEach((ele) => {
      result += `<tr>
        <th scope="row">${ele.id}</th>
        <td>${ele.nome}</td>
        <td>${ele.cognome}</td>
        <td>${ele.classe}</td>
      </tr>`;
    });
  bodyTabella.innerHTML = result;
}

//////////////////////////////////////
//OBIETTIVO FINALE --> METTERE TUTTO QUANTO A METODO
