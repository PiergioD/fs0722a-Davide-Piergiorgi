// override-> la classe figlia ridefiniscie il metodo della superclasse

class PrinterClass {
  doPrint(): void {
    console.log("doPrint() from parent called..");
  }
}

class StringPrinter extends PrinterClass {
  doPrint(): void {
    super.doPrint(); // super fa riferimento al genitore di una classe
    console.log("doPrint() is printing a string...");
  }
}

var obje = new StringPrinter();
obje.doPrint();
