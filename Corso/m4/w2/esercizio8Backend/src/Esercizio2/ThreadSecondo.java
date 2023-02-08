package Esercizio2;

import java.util.Random;

public class ThreadSecondo extends Thread {
	int [] arr;
	int sum =0;
	
	static Random rand= new Random();
	
	public ThreadSecondo(int x) {
		this.arr= new int[x];
	}

	@Override
	public void run() {
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			
			System.out.println("Erroraccio!!");
		}
		for(int i =0; i<=this.arr.length-1;i++) {
			int numero = rand.nextInt(101);
			this.arr[i]=numero;
		}
		
		for(int i =0;i<=this.arr.length-1;i++) {
			sum+=arr[i];
		}
		
		ArraySumMain.n2=sum;
	}
}
