class Person {
  nome: string;
  cognome: string;
  private visualizzaNomeCOgnome() {
    return this.nome + " " + this.cognome;
    // questo metodo è pubblico, se non idchiaro nulla e quindi accessibile dall'esterno
    // con private il metodo è privato e non è piu accessibile da fuori
  }
}

var mariorossi = new Person();
mariorossi.nome = "mario";
mariorossi.cognome = "rossi";
//console.log(mariorossi.visualizzaNomeCOgnome);

// static si usa quado voglio usare un metodo swenza necessita di creare unistanza della classe
class Person1 {
  nome: string;
  cognome: string;
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }
  // posso inizializzare il metodo senza aver creato oggetto
  static concatena(a: string, b: string) {
    return a + " " + b;
  }
}

console.log(Person1.concatena("mario", "rossi"));

// extends --> estendo una classe

class Shape {
  area: number;

  constructor(a: number) {
    this.area = a;
  }
}

class Circle extends Shape {
  // la classe figlia eredita dalla classe genitore(accade implicitamente)
  disp(): void {
    console.log("area of the circle " + this.area);
  }
}

var object = new Circle(223);
object.disp();

// extends multilivello
class Root {
  str: string;
}

class Child extends Root {}
class Leaf extends Child {} // eredita indirettamente da root
var oggetto = new Leaf();
oggetto.str = "hello its me you are looking for";
console.log(oggetto.str);
