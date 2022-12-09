// variabili
let container = document.getElementById("containerEle");

// oggetto di prova!
let banana = {
  profileURL: "img/male.png",
  gender: "maschio",
  firstName: "Eleuterio",
  lastName: "CoppaDiRame",
  email: "bananainpigiama@gmail.com",
};

// funzione per rendere visibile un messaggio di errore nel caso dello sbagliato fetch
const renderError = function (msg) {
  container.insertAdjacentText("beforeend", msg);
};

//funzione per far apparire l'elemento
const renderElement = function (data) {
  // elemento che si crea nel container
  const html = ` <div class="card text-center col-2 mx-2 my-2 shadow p-1">
    <img
      src="${data.profileURL}"
      class="card-img-top w-25 rounded-circle bg-light d-block mx-auto my-2 border shadow-sm"
      alt="immagine ${data.gender}"
    />
    <div class="card-body">
      <h5 class="card-title">${data.firstName} ${data.lastName}</h5>
      <p class="card-text text-warning fw-semibold">${data.email}</p>
    </div>
  </div>
</div>`;

  // lo inserisco nel container
  container.insertAdjacentHTML("beforeend", html);
};

// prova coon oggetto inventato
//renderElement(banana)

// funzione async per fare fetch e render visibile la card
const personaCard = async function () {
  // metto tutto nel try! cosi mi segnala errore se esiste!
  try {
    // fetcho sto json()
    const res = await fetch("users.json");
    console.log(res);

    // se lo stato ok di promise non è true,lancia un errore
    if (!res.ok) throw new Error("Problemi a prendere i dati!");

    //metodo json() pr convertitre i data che mi servono
    const dataUsers = await res.json();
    console.log(dataUsers);

    // ciclo per stampare sull pagina gli elementi!
    dataUsers.forEach((element) => {
      renderElement(element);
    });

    // prendo l'errore dal try! faccio apparire in console e lo rendo visibile nel sito!
  } catch (err) {
    console.error(`${err}!!!!`);
    renderError(`${err.message}`);
  }
};

// chiamo la funzione!
personaCard();
