package esercizio2;

public class Sim {
String numeroTelefono;
int creditoDisponibile=0;
Chiamata[] arr= {};

public Sim(String numeroTelefono,int creditoDisponibile ) {
	this.numeroTelefono=numeroTelefono;
	this.creditoDisponibile=creditoDisponibile;
	
	
}

public void stampaSim() {
	System.out.println("Numero di telefono: "+this.numeroTelefono+ " Credito disponibile: "+this.creditoDisponibile+"$  Chiamate effettuate: "+this.arr.length );
}
	
	
	

}
