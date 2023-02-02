package corso.java;

public class Automobile extends Veicolo {

	private int porte;

	public Automobile(String marca, String modello, String targa, int cilindrata,int porte) {
		super(marca, modello, targa, cilindrata);
		this.porte=porte;
	}

	public int getPorte() {
		return porte;
	}
	
	
}
