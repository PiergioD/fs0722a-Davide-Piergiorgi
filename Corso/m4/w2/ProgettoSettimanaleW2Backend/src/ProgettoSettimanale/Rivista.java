package ProgettoSettimanale;

public class Rivista extends Cartaceo {

	static Periodi periodicita;
	
	public Rivista(Integer iSBN, String titolo, Integer annoPub, Integer pageNumber,Periodi periodicita) {
		super(iSBN, titolo, annoPub, pageNumber);
		this.periodicita=periodicita;
	}

	
	
}
