package corso_java;

import java.util.Scanner;
public class MainProject {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("hello its me your are lookin for");

		
		int varx; // dichiaro una variabile
		varx=25; // inizializzazione di una varibile
		int vary=10; // dichiarazione ed inizializzaione di una variabile
		
		int arrx[]=new int[5];// dichiarazione di un array
		arrx[0]=25; // alla posizione 0 l'array deve conterne 25
		
		int arry[] = {12,4,19}; // vanno utlizzate le graffe per gli array!
		
		
		// tipi di dato! piu comuni! stringa non è primitivo!
		int n=25;
		double f=25.5;
		char c='s';
		boolean b=true;
		String s ="banana";
		
		int id= (int)f; // ti dico di effettuare una trasformazione! trasformi il numero 
		// il numero decimale viene tagliato(nessun per eccesso o diffetto) da 25.5 a 25
		
		//int is= Integer.parseInt(s); // metodo per trasformare un tipo di dato completamente diverso in un numero
				// è uguale a Number.parseInt() di js
		
		
		int num1=10;
		int num2=3;
		int res=num1/num2;
		int mod= num1%num2;
		double r=num1/num2; // qua mi verrà il numero decimale!
		// int accetta solo numeri interi! quindi questa divisione darà un numero intero! anche se non pè vero!
		
		// ho creato un oggetto in grado di leggere dalla console
		// arrivo in manierà procedurale a questa istruzione, java si aspettere che io scrivi qualcosa
		Scanner sc= new Scanner(System.in);
		System.out.print("scrivi il tuo nome: ");
		String nome=sc.nextLine(); // nextline riceve una string! che possiamo trasformare se ci interessa numero o altro!
		System.out.println("ciao "+ nome);
		
		System.out.print("dimmi la tua eta: ");
		int eta=Integer.parseInt(sc.nextLine());
		if(eta>18) {System.out.println("sei maggiorenne!");
		}else {System.out.println("sei minorenne");};
		
		stampa();
	}
	
	public static void stampa() {
		System.out.println("FINE!!");
	}

}
