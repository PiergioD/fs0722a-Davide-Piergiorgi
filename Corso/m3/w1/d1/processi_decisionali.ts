var n: number = 5;
while (n > 5) {
  console.log("entrato nel while");
}

do {
  console.log("entered do while");
} while (n > 5);

// esempio loop con break
var i: number = 1;
while (i <= 10) {
  if (i % 5 == 0) {
    console.log("il primo multiplo di 5 tra 1 e 10 è: " + i);
    break;
  }
  i++;
}

// esempio loop con continue
var num: number = 0;
var count: number = 0;

for (num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    continue;
  }
  count++;
}

console.log("the count of odd values between 0 and 20 is: " + count);
