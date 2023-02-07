package esercizio1;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Esercizzietto1 {
	static Scanner sc = new Scanner(System.in);
	static Set<String> s = new HashSet<String>();
	static Set<String> d = new HashSet<String>();

	public static void main(String[] args) {
		inserisciParole();
	}

	public static void inserisciParole() {
		try {
			System.out.println("Quante parole vuoi");
			int numero = Integer.parseInt(sc.nextLine());

			for (int i = 0; i < numero; i++) {
				System.out.println("Scrivi la parola da aggiungere");
				String parola = sc.nextLine();
				if (!s.contains(parola)) {
					s.add(parola);
					System.out.println("Parola aggiunta!");
				} else {
					System.out.println("Parola gia presente! verra messo nella lista dei dublicati");
					d.add(parola);
				}

			}
		} catch (NumberFormatException e) {
			System.out.println("Errore! Scrivi un numero");
			inserisciParole();
		}

		System.out.println("Set delle parole : " + s.size() + " elementi");
		stampaLista(s);
		if(d.size()!=0) {
			System.out.println("Set delle parole duplicate : " + d.size() + " elementi");
			stampaLista(d);
		}
	}

	
	public static void stampaLista(Set<String> set) {
		for (String element : set)
			System.out.println(element);
	}

}
