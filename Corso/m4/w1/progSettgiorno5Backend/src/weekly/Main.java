package weekly;

import java.util.Scanner;

public class Main {

	static Scanner sc = new Scanner(System.in);
	static ElementoMultimediale[] lettori = new ElementoMultimediale[5];

	public static void main(String[] args) {

		superPlay();

	}

	public static void superPlay() {
		for (int i = 0; i < 5; i++) {
			System.out.println("Inserisci il tipo tra Audio, Video o Immagine: ");
			String tipo = sc.nextLine();
			System.out.println("Inserisci il titolo: ");
			String titolo = sc.nextLine();
			if (tipo.equals("Audio")) {
				System.out.println("Inserisci la durata: ");
				int durata = Integer.parseInt(sc.nextLine());
				lettori[i] = new Audio(titolo, durata);
				System.out.println(lettori[i]);
			} else if (tipo.equals("Video")) {
				System.out.println("Inserisci la durata: ");
				int durata = Integer.parseInt(sc.nextLine());
				lettori[i] = new Video(titolo, durata);
				System.out.println(lettori[i]);
			} else if (tipo.equals("Immagine")) {
				lettori[i] = new Audio(titolo, 1);
				System.out.println(lettori[i]);
			} else {
				System.out.println("Inserisci il valore corretto");
			}
		}
		int num;
		do {
			System.out.println("Inserisci un numero tra 0 e 5:");
			num = Integer.parseInt(sc.nextLine());
			if(num>0 && num <= 5) {
			if (lettori[num-1] instanceof Audio || lettori[num-1] instanceof Video) {
				lettori[num-1].play();
			} else {
				lettori[num-1].show();
			}
			}else if(num == 0){
				System.out.println("Fine riproduzione");
			}else {
				System.out.println("Errore inserisci un numero tra 0 e 5");
			}
		} while (num != 0);
	}

}
/*
 * System.out.println("Inserisci la durata: "); int durata =
 * Integer.parseInt(sc.nextLine()); lettori[i]= new Audio(titolo,durata);
 */