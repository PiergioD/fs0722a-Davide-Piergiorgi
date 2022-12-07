salvaIlDato = function (info_da_salvare) {
  localStorage.ultimoPensiero = info_da_salvare;
  alert("Memorizzazione effettuata");
};

recuperailDato = function (elemento) {
  if (
    confirm("sostituire il contenuto attuale con ultimo pensiero memorizzato?")
  ) {
    elemento.value = localStorage.ultimoPensiero;
  }
};

// non va perche? onclick del cavolo
