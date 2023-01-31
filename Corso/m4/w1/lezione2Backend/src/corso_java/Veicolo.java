package corso_java;

public class Veicolo {
	// mettere piu costruttori nella classe si dice overloading!
	// attributi della classe
	String modello;
	String marca;
	String targa;
	String colore;
	int cilindrata;
	static int count=0;
	// è una proprietà della clASSE non di this!
	
	// creo il costruttore! principale
	public Veicolo(String modello,String targa,String marca,String colore,int cilindrata) {
		this.modello=modello;
		this.targa=targa;
		this.marca=marca;
		this.colore=colore;
		this.cilindrata=cilindrata;
		this.count++;
		// ogniqualvolta che io creo un veicolo, il count di partenza sarà sempre a zero! utilizziamo lo static! 
	}
	
	// costruttore per un veicolo facnedo passare meno cose
	public Veicolo(String modello, String marca,String colore,int cilindrata) {
		this.modello=modello;
		this.marca=marca;
		this.colore=colore;
		this.cilindrata=cilindrata;
		this.count++;
	};
	
	
	public void start() {System.out.println("Veicolo avviato");}
	
	public void stop() {System.out.println("Veicolo fermato");}
	
	public String info() {return this.marca+ " "+this.modello + " "+ this.colore+ " cc. "+this.cilindrata+ " "+this.targa;}
	
	public static void Test() {
		System.out.println("Veicolo!!!");
	}
}
