//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = "criceto";
console.log(petPreferito);
var PetPreferito = "coniglio";
console.log(petPreferito);
var $pet = "giraffa";
console.log($pet);
var _pet = "leone";
console.log(_pet);
var _pet2 = "pantera";
document.write(_pet2);

//var 12 = 'numero';

/*// 
function xor(a, b) {
  if (a === true || b === true) return true;
  if (a === true && b === true) return false;
  else return false;
}
*/

// finire di implementare col prompt
function peopleWithAgeDrink(age) {
  console.log(age);
  // let age = prompt("What is your age?", "per esempio 20");
  // if (Number(age || 0) > 0) {
  if (age <= 14) return console.log("drink toddy");
  if (age <= 18) return console.log("drink coke");
  if (age <= 21) return console.log("drink beer");
  else console.log("drink whisky");
}
//}

peopleWithAgeDrink(Math.floor(Math.random() * 100));
