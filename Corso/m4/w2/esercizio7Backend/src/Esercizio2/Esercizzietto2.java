package Esercizio2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Esercizzietto2 {

	static Random numero= new Random();
	
	
	
	
	
	
	public static void main(String[] args) {
		
		ArrayList<Integer> lista= creaList(5);
		ordinaList(lista);
		stampaPariDispari(lista,true);
		stampaPariDispari(lista,false);
		
	}
	
	
	
	
	
	public static ArrayList<Integer> creaList(int n) {
        ArrayList<Integer> arr = new ArrayList<Integer>(n);
        for (int i = 0; i < n; i++) {
            int randomNum = numero.nextInt(101);
            arr.add(randomNum);
        }
        System.out.println("Array base: ");
        System.out.println(arr);
        return arr;
    }
	
	
	public static ArrayList<Integer> ordinaList(ArrayList<Integer> arr){
		ArrayList<Integer> arrOrdinato = new ArrayList<Integer>();
	for(int i=arr.size()-1;i>=0;i--) {
		arrOrdinato.add(arr.get(i));
		
	}
		System.out.println("Array Ordine inverso: ");
		System.out.println(arrOrdinato);
		return arrOrdinato;
		
		
	}
	
	public static void stampaPariDispari(ArrayList<Integer> arr,boolean bool ){
		ArrayList<Integer> arrPari = new ArrayList<Integer>();
		ArrayList<Integer> arrDispari = new ArrayList<Integer>();
		
		
		
		for(int i=0;i<arr.size();i++){
		    if(arr.get(i)%2==0 && bool==true)
		        arrPari.add(arr.get(i));
		    else if(arr.get(i)%2!=0 && bool==false)
		        arrDispari.add(arr.get(i));
		}
		
		System.out.println("Lista numeri pari: "+ arrPari);
		System.out.println("Lista numeri dispari: "+ arrDispari);
		
		
		}
	
	}
	
	
	
	
	
	
	
	
	

