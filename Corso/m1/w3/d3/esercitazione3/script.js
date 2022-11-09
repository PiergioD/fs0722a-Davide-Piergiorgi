// creare riferimento per container della lista
let input = document.getElementById("input");
let btnAdd = document.getElementById("btnAdd");
let todoContainer = document.getElementById("tasksCont");

// creare funzione per aggiungere todo da input
btnAdd.addEventListener("click", function () {
  if (input.value.length === 0) {
    return alert("Scrivi una cosa da fare");
  }
  createElement(todoContainer, input.value);
  addDeleteEventListener();
  toggleLineThroughClasses();
  resetInputField();
});

// creare funzione per generare elemento della lista
const createElement = (container, text) => {
  container.innerHTML += `
    <div class="todo-item">
      
      <span class="todo-title">
        <input type="checkbox" class="checkbox" />
        ${text}
      </span>
      <button class="delete">X</button>
    </div>`;
};

// creare funzione per rimuovere todo
const addDeleteEventListener = () => {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((el) => {
    el.addEventListener("click", function () {
      this.parentNode.remove();
    });
  });
};

// creare funzione per toggle della classe tagliato
const toggleLineThroughClasses = () => {
  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach((element) => {
    // se uso checkbox devo controllare attributo checked e non value
    element.addEventListener("click", function () {
      if (this.checked) {
        // closest per risalire la catena del DOM e prendere
        // elemento che matcha selettore => contrario di query selector
        this.closest(".todo-item").classList.add("flagged");
        return;
      }
      this.closest(".todo-item").classList.remove("flagged");
    });
  });
};

// reset input field
const resetInputField = () => {
  input.value = "";
};
