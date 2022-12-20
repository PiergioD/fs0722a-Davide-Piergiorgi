// dichiaro che tipo di valori ci devono essere e array
var alphas;
// inizializzo array
alphas = ["2", "3", "4", "5"];
console.log(alphas[0]);
console.log(alphas[1]);
var nums = [1, 2, 3, 4];
console.log(nums[0]);
// creo usando l'oggetto Array
// argomento-> un valore numero che rappresenta la dimensione dell'array oppure un elenco di valori separati da virgole
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
// argomento-> un elenco di valori
var names = new Array("mary", "tom", "jack", "jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// metodo pop--> RIMUOVE ultimo ELEMENTO E LO RESITUISCE
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is :" + element);
// metodo push -> aggiunge l'elemento(gli elementi) forniti nell'array e resituisce il nuovo array
var numeri = [3, 4, 6, 7];
var length = numeri.push(10);
console.log("new numbers are" + numeri);
var length = numeri.push(20);
console.log("new numbers are" + numeri);
