package esercizio4;

import java.util.Scanner;

public class esercizio4 {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		cicloPerNumeri();
	}
	
	
	public static void cicloPerNumeri() {
		System.out.print("Inserisci un numero da cui fare countdown: ");
		int num=Integer.parseInt(sc.nextLine());
		for(int i=num; i>=0;i--) {
			System.out.println("Countdown: "+i+" sec");
		}
	}

}
