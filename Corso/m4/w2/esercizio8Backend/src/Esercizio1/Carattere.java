package Esercizio1;

public class Carattere extends Thread {

	private String simbolo;

	

	public Carattere(String simbolo) {
		
		this.simbolo = simbolo;
	}



	@Override
	public void run() {
		for (int i = 0; i <= 10; i++) {
			System.out.println("Stampa N. " + i + " Simboletto: " + simbolo);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				System.out.println(e.getMessage());
			}
		}

	}
}
