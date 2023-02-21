package model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.*;

import enums.DurataAbb;


@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS) //per ereditarieta, in questo modo viene generata una tabella per ogni figlio
@MappedSuperclass
public abstract class PuntoEmissione implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_emissione;
	@Column
	private Utente utente;
	@Column
	private Abbonamento abbonamento;
	@Column
	private Integer counter_biglietti=0;
	@Column
	private Integer counter_abbonamenti=0;

	public PuntoEmissione() {
		super();
	}

	public Integer getCounter_biglietti() {
		return counter_biglietti;
	}

	public void setCounter_biglietti(Integer counter_biglietti) {
		this.counter_biglietti = counter_biglietti;
	}

	public Integer getCounter_abbonamenti() {
		return counter_abbonamenti;
	}

	public void setCounter_abbonamenti(Integer counter_abbonamenti) {
		this.counter_abbonamenti = counter_abbonamenti;
	}

	//FUNZIONE PER CREARE BIGLIETTO!
	public Biglietto creaBiglietto() {
		Biglietto b = new Biglietto();
		b.setData_emissione(LocalDate.now());
		b.setUtente(this.utente);
		this.counter_biglietti++;
		System.out.println("Biglietto creato! creato da "+utente.getNome()+ " "+utente.getCognome());
		return b;
		
	}
	
	//FUUNZIONE PER CREARE ABBONAMENTO
	public Abbonamento creaAbbonamento(Tessera tessera,DurataAbb durata) {
		Abbonamento abb = new Abbonamento();
		abb.setDurata(durata);
		abb.setTessera(tessera);
		this.counter_abbonamenti++;
		System.out.println("Abbonamento Creato!");
		return abb;
		
	}

	public Integer getId_emissione() {
		return id_emissione;
	}

	public void setId_emissione(Integer id_emissione) {
		this.id_emissione = id_emissione;
	}

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	public Abbonamento getAbbonamento() {
		return abbonamento;
	}

	public void setAbbonamento(Abbonamento abbonamento) {
		this.abbonamento = abbonamento;
	}
	
}
