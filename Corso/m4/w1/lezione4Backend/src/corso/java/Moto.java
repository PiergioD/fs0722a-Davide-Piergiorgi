package corso.java;

public class Moto extends Veicolo {

	private int posti;

	public Moto(String marca, String modello, String targa, int cilindrata,int posti) {
		super(marca, modello, targa, cilindrata);
		this.setPosti(posti);
	}

	public int getPosti() {
		return posti;
	}

	public void setPosti(int posti) {
		this.posti = posti;
	}
	
	
	
	
}
