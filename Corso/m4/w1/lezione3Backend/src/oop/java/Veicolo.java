package oop.java;

public class Veicolo {
	
	//MODIFICATORI DI ACCESSO!
	//public che è quello di default
	// private rendo privato l0attributo, visibile sonlo nella clase in cui è defiinto
	// protected è un ibrido, in cui presenta l'ereditarietà
	
	
	// se metto private in questa prorprieta non posso rinominarla! è nascosta e non visibile al di fuori della classe in cui lo definita
private String modello;
private String marca;
public String targa;
 String colore;

public Veicolo(String modello,String marca,String targa,String colore) {
	this.modello=modello;
	this.marca=marca;
	this.targa=targa;
	this.colore=colore;
}

// posso creare questi get(solo leggere) e set(modificare)
public String getTarga() {
	return targa;
}

public void setTarga(String targa) {
	this.targa = targa;
}

public String getColore() {
	return colore;
}

public void setColore(String colore) {
	this.colore = colore;
}
}
