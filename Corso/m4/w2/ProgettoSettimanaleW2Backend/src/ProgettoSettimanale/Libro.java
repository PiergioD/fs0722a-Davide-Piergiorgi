package ProgettoSettimanale;

public class Libro extends Cartaceo {

String autore;
String genere;


public Libro(Integer iSBN, String titolo, Integer annoPub, Integer pageNumber,String autore,String genere) {
	super(iSBN, titolo, annoPub, pageNumber);
	
	this.autore=autore;
	this.genere=genere;
}




	
	
	
	

}
