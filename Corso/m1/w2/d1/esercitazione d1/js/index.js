alert("Usa il pop up per dare dei messaggi");
window.alert("Sto studiando JS");

let btn = document.querySelector("button");
console.log(btn);

function peopleWithAgeDrink() {
  let age = prompt("What is your age?", "per esempio 20");
  if (Number(age || 0) > 0) {
    if (age <= 14) return console.log(`You are ${age} years old! Drink toddy!`);
    if (age <= 18) return console.log(`You are ${age} years old! Drink coke!`);
    if (age <= 21)
      return console.log(`You are ${age} years old! Drink some beer!`);
    else
      console.log(
        `You are ${age} years old! Take it easy and drink some whiskey!`
      );
  } else age = prompt("Not a valid age...", "What is your age again??");
}
//}

btn.addEventListener("click", peopleWithAgeDrink);
