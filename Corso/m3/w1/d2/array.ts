// dichiaro che tipo di valori ci devono essere e array
var alphas: string[];
// inizializzo array
alphas = ["2", "3", "4", "5"];

console.log(alphas[0]);
console.log(alphas[1]);

var nums: number[] = [1, 2, 3, 4];
console.log(nums[0]);

// creo usando l'oggetto Array
// argomento-> un valore numero che rappresenta la dimensione dell'array oppure un elenco di valori separati da virgole

var arr_names: number[] = new Array(4);

for (var i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
  console.log(arr_names[i]);
}

// argomento-> un elenco di valori

var names: string[] = new Array("mary", "tom", "jack", "jill");
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

// destrutturare l'array-> rompere la struttura dell'array
var arr: number[] = [11, 22];

var [x, y] = arr;
console.log(x);
console.log(y);

// attraverso array con for
var j: any;

var n: number[] = [1223213, 32, 132, 13, 2, 321, 32, 31];
for (j in nums) {
  console.log(n[j]);
}

// array multidimensionali (ad essempio array bidimensinale) array nell'array

/*
var arr_name: datatype[][] = [
  [val1, val2, valn],
  [v1, v2, v3],
];
*/

// posso passare un aray a una funzione
var nomi: string[] = new Array("mary", "tom", "jack", "jill");
function disp(arr_nomi: string[]) {
  for (var i = 0; i < arr_nomi.length; i++) {
    console.log(nomi[i]);
  }
}

disp(nomi);
