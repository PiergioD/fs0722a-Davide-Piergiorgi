package ProgettoSettimanale;

public abstract class Cartaceo {
Integer iSBN ;
String titolo;
Integer annoPub;
Integer pageNumber;
public Cartaceo(Integer iSBN, String titolo, Integer annoPub, Integer pageNumber) {
	
	this.iSBN = iSBN;
	this.titolo = titolo;
	this.annoPub = annoPub;
	this.pageNumber = pageNumber;
}



}
