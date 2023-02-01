package esercizio2;

public class Sim {
String numeroTelefono;
int creditoDisponibile=0;
Chiamata[] arr;

public Sim(String numeroTelefono,int creditoDisponibile ) {
	this.numeroTelefono=numeroTelefono;
	this.creditoDisponibile=creditoDisponibile;
	this.arr= new Chiamata[5];
	this.stampaUltimeChiamate();
	
}

public void ricaricaSim(int credito) {
	this.creditoDisponibile+=credito;
}

public void stampaSim() {
	System.out.println("Numero di telefono: "+this.numeroTelefono+ " Credito disponibile: "+this.creditoDisponibile+"$  Chiamate effettuate: "+this.arr.length );
}

public void stampaUltimeChiamate() {
	System.out.println("Chiamata1 : "+ this.arr[0] );
	System.out.println("Chiamata2 : "+ this.arr[1] );
	System.out.println("Chiamata3 : "+ this.arr[2] );
	System.out.println("Chiamata4 : "+ this.arr[3] );
	System.out.println("Chiamata5 : "+ this.arr[4] );
}
	
	
	

}
