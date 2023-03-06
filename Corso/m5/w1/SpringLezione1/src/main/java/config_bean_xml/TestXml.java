package config_bean_xml;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TestXml {

	private String nome;
	private String cognome;
	private int age;
	
	
	// Questa classe avra tre costruttori! due con annotation e uno personalizato con un valore di default!
	public TestXml(String nome, String cognome) {
		super();
		this.nome = nome;
		this.cognome = cognome;
	}



	// con lombok tramite annotation scrivo tutto quello che mi serve! 
	// sopra ho tutti i costruttori,vuoti o con arogmenti, getter e setter e tostring! senza fare pagine
	// giganti di codice
	// mi velocizza la scrittura del codice!

	public  String saluta() {
		return "ciao "+this.nome +" "+this.cognome;
	}



	
	
	
	
	
	
}
