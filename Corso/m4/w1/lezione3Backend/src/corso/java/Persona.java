package corso.java;

public class Persona {
String nome;
String cognome;
int eta;

public Persona(String nome,String cognome,int eta) {
	this.nome=nome;
	this.cognome=cognome;
	this.eta=eta;
}


// ogni qualvolta qualcuno ti chiama, stampami quel return
@Override
public String toString() {
	return "home: "+nome+" cognome: "+cognome+" eta: "+eta;
}

}
