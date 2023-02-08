package thread.java;

public class ThreadMainProject {

	public static void main(String[] args) throws InterruptedException {
		TestThread t1= new TestThread("Primo thread");
		TestThread t2= new TestThread("Secondo thread");
		
		//TestRunnable t1= new TestRunnable("primo thread");
		//TestRunnable t2 = new TestRunnable("secondo thread");
		
		t1.start();
		// t2 rimane in attesa fino a quando t1 non finisce l'esecuzione
		t1.join();
		t2.start();
		System.out.println("FINE");
		// non ho una esecuzione procedurale quando utilizzo i thread! ognuno lavora per conto suo!
		
		//posso sopsndere l'esecuzione del thread usando sleep!(tipo settimout di js)
		
		// join invece permette di mettermi in attesas inche un altro thread non ha terminato un esecuzione
		
	}

}
