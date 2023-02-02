package corso.java;

public class Veicolo {
String marca;
String modello;
String targa;
int cilindrata;
public Veicolo(String marca, String modello, String targa, int cilindrata) {
	
	this.marca = marca;
	this.modello = modello;
	this.targa = targa;
	this.cilindrata = cilindrata;
}

public String getMarca() {
	return marca;
}
public void setMarca(String marca) {
	this.marca = marca;
}
public String getModello() {
	return modello;
}
public void setModello(String modello) {
	this.modello = modello;
}
public String getTarga() {
	return targa;
}
public void setTarga(String targa) {
	this.targa = targa;
}
public int getCilindrata() {
	return cilindrata;
}
public void setCilindrata(int cilindrata) {
	this.cilindrata = cilindrata;
}


public String acc() {
	return "aumenta velocità";
}

}
