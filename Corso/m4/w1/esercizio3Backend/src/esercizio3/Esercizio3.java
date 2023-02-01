package esercizio3;

import java.util.Scanner;

public class Esercizio3 {
	String stringa = "famigliaBarbaPapa";
static Scanner sc=new Scanner(System.in);
	public static void main(String[] args) {
		// TODO Auto-generated method stub


cicloConStringhe();
	}

	public static void cicloConStringhe() {
		String str="";
		do {
			System.out.println("Inserisci una stringa: ");
			String str1= sc.nextLine();
			String str2=String.join(",", str1.split(""));
			System.out.println(str2);
			str=str1;
		} while(!str.equals("q"));
	}
	
}
