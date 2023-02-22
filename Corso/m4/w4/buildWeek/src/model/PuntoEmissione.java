package model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Set;

import javax.persistence.*;

import enums.DurataAbb;



@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class PuntoEmissione implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_emissione;
	@Column
	private Utente utente;
	@OneToMany(mappedBy = "puntoEmissione")
	private Set<Abbonamento> abbonamenti;
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

	
	public void setAbbonamento(Abbonamento abbonamento,Tessera tessera) {
		tessera.setAbbonamento(abbonamento);
		this.counter_abbonamenti++;
		System.out.println("Abbonamento Creato!");
	}
	
}
