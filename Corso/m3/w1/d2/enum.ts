// enum ci permettono di definire un inseime di costanti
// le usiamo per oridinare dei dati oppure creare una sserie di casi

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BAdRequest = 400,
}

console.log(StatusCode.NotFound);
console.log(StatusCode.Success);

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

// mi darà la posizione, quindi 1
let currentDirection = CardinalDirections.North;
console.log(currentDirection);
