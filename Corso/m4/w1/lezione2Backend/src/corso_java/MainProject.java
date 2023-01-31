package corso_java;

public class MainProject {

	public static void main(String[] args) {
		
		/*
		// creo una variaibile di tipo veicolo e definisco le sue caratteristiche!
		Veicolo v= new Veicolo();
        v.marca="fiat";
        v.modello="500";
        v.colore="nera";
        v.cilindrata=1200;
        v.targa="AB123CD";
        */
		
		Veicolo v= new Veicolo("500","fiat","ABC123CD","Nera",1200);
		Veicolo v1=new Veicolo("fiesta","ford","grigio",1200);
		Veicolo v2 = new Veicolo("x5","bmw","verde",2500);
		v2.targa="ZAS3234";
		v1.targa="SDE3442";
		
		System.out.println(v.info());
		System.out.println(v1.info());
		System.out.println(v2.info());
		
		int tNum=10;
		System.out.println(tNum);
		testInt(tNum);
		System.out.println(tNum);
		
		Veicolo tv = new Veicolo("500","fiat","ACDWEW","nera",1200);
		System.out.println(tv.info());
		testVeicolo(tv);
		System.out.println(tv.info());
		
		System.out.println("N. Veicoli: " + Veicolo.count);
		// sarà uno! con static non è una proprietà di istanza! è una proprietà della classe condivisa da tutti gli oggetti della classe!
		tv.start();
		tv.stop();
		Veicolo.Test();
		// metodi static sono prorpreita metodi di classe condivisi da tutti gli oggetti! non sono prorpreta o metodi soltanto degli oggetti!
		// metodo static posso chiamralo senza istanziarlo in un oggetto! 
		
		System.out.println(tv.equals(v2));
		// quals ti dice se tutte le prorprieta di tv sono uguali a v2, e resituisce un booleano
		System.out.println(tv);// mi stamperà il riferimento alla zona di memoria facendo toString()
		System.out.println(tv.getClass()); // mi darà la classe che creera questa istanza
		
		
		Veicolo[] arr=new Veicolo[4]; // creo array di tipo veicolo che conterrra oggetti di tipo veicolo!
		pushArr(tv,arr);
		System.out.println(arr[0]);
		// stamperà la memoria del veicolo
		System.out.println(arr);
		// stamperà la memoria di arr di veicoli
	}
	
	
	public static void testInt(int param) {
		param=25;
	}
	
	public static void testVeicolo(Veicolo param) {
		param.marca="---";
	}
	
	public static void pushArr(Veicolo v,Veicolo[] veicoli) {
		veicoli[0]=v;
		
	}

}
