package corso.java;

import java.util.Scanner;

public class MainProgetto {
	// chiamo le variabili che mi servono nella sezione globale della classe
	static Scanner sc = new Scanner(System.in);
	static Persona[] spettatori= new Persona[50];

	public static void main(String[] args) {
		
		int i=1;
		while(i<=spettatori.length) {
			System.out.print("Vuoi vendere altri biglietti? (si/no)");
			String r=sc.nextLine();
			if(r.equals("si")) {
			registrazione();}
			else {break;};}
		stampaBiglietti();
		System.out.println("FINE");
        
        
	}

	
	
	
	public static void registrazione() {
		System.out.print("Inserisci il nome: ");
        String nome=sc.nextLine();
        System.out.print("Inserisci il cognome: ");
        String cognome=sc.nextLine();
        System.out.print("Inserisci la tua età: ");
        int eta=Integer.parseInt(sc.nextLine());
        
        if(eta>18) {
        	System.out.println("Ciao "+nome+ " "+cognome);
  // creo l'oggetto direttamente nel richiamo della funzione!
        	emettiBiglietto(new Persona(nome,cognome,eta));
        } else if(eta>16) {System.out.println("Ciao "+nome+ " "+cognome+ " devi essere accompagnato però!");}
        
        else {System.out.println("Non puoi entrare");}
        
	}
	
	public static void emettiBiglietto(Persona p) {
		
		for (int i=0;i<spettatori.length;i++) {
			// se trovi uno spazio vuoto nellarray, scrivici la persona e ferma il ciclo
			if(spettatori[i]==null)
			spettatori[i]=p;
			break;
		}
	}
	
	public static void stampaBiglietti() {
		System.out.println("Elenco Biglietti");
		for(int i=0;i>spettatori.length;i++) {
			if(spettatori[i]!=null)
			System.out.println(spettatori[i]);
		}
	}
}
