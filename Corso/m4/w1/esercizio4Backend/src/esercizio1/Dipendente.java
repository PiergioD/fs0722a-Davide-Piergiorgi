package esercizio1;

public class Dipendente { 
	static double stipendioBase=1000.0;
	private String matricola;
	private double stipendio;
	private double ImportStraordinario;
	private Livello livello;
	private Dipartimento dipartimento;
	
	// costruttore che prende tutto
	public Dipendente(String matricola, double stipendio, double importStraordinario, Livello livello,
			Dipartimento dipartimento) {
		this.matricola = matricola;
		this.stipendio = stipendio;
		this.ImportStraordinario = importStraordinario;
		this.livello = livello;
		this.dipartimento = dipartimento;
	}

	public Dipendente(String matricola, Dipartimento dipartimento) {
		
		this.matricola = matricola;
		this.dipartimento = dipartimento;
		this.stipendio=this.stipendioBase;
		this.ImportStraordinario=30;
		this.livello=Livello.Operaio;
	}
	
	
	
	
	

	public static double getStipendioBase() {
		return stipendioBase;
	}

	public static void setStipendioBase(double stipendioBase) {
		Dipendente.stipendioBase = stipendioBase;
	}

	public String getMatricola() {
		return matricola;
	}

	public void setMatricola(String matricola) {
		this.matricola = matricola;
	}

	public double getStipendio() {
		return stipendio;
	}

	public void setStipendio(double stipendio) {
		this.stipendio = stipendio;
	}

	public double getImportStraordinario() {
		return ImportStraordinario;
	}

	public void setImportStraordinario(double importStraordinario) {
		ImportStraordinario = importStraordinario;
	}

	public Livello getLivello() {
		return livello;
	}

	public void setLivello(Livello livello) {
		this.livello = livello;
	}

	public Dipartimento getDipartimento() {
		return dipartimento;
	}

	public void setDipartimento(Dipartimento dipartimento) {
		this.dipartimento = dipartimento;
	}

	public void stampaDatiDipendente() {
		System.out.println("Matricola: "+this.matricola+ " livello classe: "+this.livello+ " dipartimento: "+this.dipartimento+ " stipendio: "+this.stipendio );
	}
	
	
	public void promuovi() {
		switch(livello) {
		case Operaio:
			System.out.println("Sei un operaio! sei promosso a impiegato!");
			this.livello=Livello.Impiegato;
			this.stipendio=this.stipendioBase*1.2;
			break;
			
		case Impiegato:
			System.out.println("Sei un impiegato! Sei stato promosso a quadro! Pigli piu soldi");
			this.stipendio=this.stipendioBase*1.5;
			this.livello=Livello.Quadro;
break;
		case Quadro:
			System.out.println("Sei un quadro! sei stato promosso a dirigente! Pigli tanti piu soldi");
			this.stipendio=this.stipendioBase*2;
			this.livello=Livello.Dirigente;
			break;
			default: System.out.println("Il dipendente è gia dirigente! e piglia molti troppi piu soldi");
		} 
		
		
		 
		
		
	}

	
	public double calcolaPaga(Dipendente dip) {
		System.out.println(dip.getStipendio());
		return dip.getStipendio();
	}
	
	
	public double calcolaPagaMensileconStraordinario(Dipendente dip, int ore) {
		System.out.println(dip.getStipendio()+(ore*dip.ImportStraordinario));
		return dip.getStipendio()+(ore*dip.ImportStraordinario);
	}
	
	

}
