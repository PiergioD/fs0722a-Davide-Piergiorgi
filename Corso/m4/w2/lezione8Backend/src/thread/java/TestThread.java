package thread.java;

import java.util.logging.Logger;

public class TestThread extends Thread {

	private String message;
	
	public TestThread(String message) {
		
		this.message = message;
	}

	
	// il run definisce il codice che deve essere eseguitp nel thread!
	// una volta istanziato il thread, è possibile avbviarlo usando il metodo start()
	@Override
	public void run() {
		for(int i=0;i<=20;i++) {
			System.out.println("N." +i+" " +message);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				System.out.println(e.getMessage());
			}
		}
	}

	
	
	
	
}
