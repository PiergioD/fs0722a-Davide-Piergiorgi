package contoCorrente;

public class ContoCorrente {

	private double saldo;
	private String titolare;
	
	public ContoCorrente(String titolare) {
		
		this.titolare = titolare;
	}
	
	
	public double deposito(double fondi) {
		try {
			Thread.sleep(100);
		} catch (InterruptedException e) {
			System.out.println("Errore Thread!!");
		}
		this.saldo+=fondi;
		return this.saldo;
	}


	@Override
	public String toString() {
		return "ContoCorrente [saldo="+ saldo+ ", titolare="+titolare+ "]";
	}
	
	
	
	public double prelievo(double fondi) {
		try {
			Thread.sleep(100);
		} catch (InterruptedException e) {
			System.out.println("Errore Thread!!");
		}
		if(controlloPrelievo(fondi)) {
			System.out.println("Prelievo "+this.titolare + " $" +fondi);
			this.saldo-=fondi;
		}
		return this.saldo;
	}
	
	public boolean controlloPrelievo(double fondi) {
		try {
			Thread.sleep(100);
		} catch (InterruptedException e) {
			System.out.println("Errore Thread!!");
		}
		// maggiore o uguale a quanto vuoi prelevare
		// il prelievo è possibile?
		return this.saldo >=fondi;
	}
	
	
	
	
}
