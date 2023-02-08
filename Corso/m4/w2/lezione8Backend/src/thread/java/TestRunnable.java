package thread.java;

public class TestRunnable implements Runnable {

private String message;
	
	public TestRunnable(String message) {
		this.message = message;
	}

	
	


	// il run definisce il codice che deve essere eseguitp nel thread!
	// una volta istanziato il thread, è possibile avbviarlo usando il metodo start()
	@Override
	public void run() {
		for(int i=0;i<=20;i++) {
			System.out.println("N." +i+" " +message);
		}
	}

	
	
	
}
