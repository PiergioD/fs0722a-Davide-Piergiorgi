package Esercizio2;

public class ArraySumMain {

	
	static int n1;
	static int n2;static int n3;
	
	
	
	public static void main(String[] args) throws InterruptedException {
		ThreadPrimo t1= new ThreadPrimo(1000);
		ThreadSecondo t2= new ThreadSecondo(1000);
		ThreadTerzo t3= new ThreadTerzo(1000);
		
		t1.start();
		t1.join();
		t2.start();
		t2.join();
		t3.start();
		t3.join();
		
		System.out.println("Somma dei numeri: "+n1+" "+n2+" "+n3+" è uguale a "+(n1+n2+n3));
	}

}
