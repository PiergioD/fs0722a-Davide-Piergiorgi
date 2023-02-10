package Esercizio3;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

import org.apache.commons.io.FileUtils;

public class RegistroPresenze {

	static File file = new File("dirFile/text.txt");
	static Scanner sc = new Scanner(System.in);

	static Alunno[] arr = new Alunno[3];

	public static void main(String[] args) throws IOException {

		for (int i = 0; i < arr.length; i++) {
			System.out.println("Nome dell'alunno");
			String name = sc.nextLine();
			System.out.println("Numero presenze dell'alunno");
			int numeroPresenze = Integer.parseInt(sc.nextLine());
			Alunno alunno = new Alunno(name,numeroPresenze);
			arr[i]=alunno;
		String alunnoStringa=alunno.toString();
		
		}
		
		
		
		
		
		

	}

	public static void scriviFile(String testo) throws IOException {
		String presenzatxt="";
		
		
		FileUtils.writeStringToFile(file, testo, "UTF-8");
		System.out.println("testo inserito nel file");
	}

	public static String leggiFile() throws IOException {
		String txtFile = FileUtils.readFileToString(file, "UTF-8");
		System.out.println("testo preso dal file");
		return txtFile;
	}

}
