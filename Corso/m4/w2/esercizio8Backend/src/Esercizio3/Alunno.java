package Esercizio3;

public class Alunno {
private String nome;
private int presenze;

public Alunno(String nome,int presenze) {
	this.nome = nome;
	this.presenze = presenze;
}

@Override
public String toString() {
	return "Alunno [nome=" + nome + ", presenze=" + presenze + "]";
}





}
