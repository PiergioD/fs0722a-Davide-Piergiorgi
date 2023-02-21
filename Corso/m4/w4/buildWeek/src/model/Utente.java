package model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Utente implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_utente;
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "utente")// se cencello utente cancello pure utente! (non viceversa! l'utente puo eseere senza tessera)
	private Tessera tessera;
	@Column(nullable=false)
	private String nome;
	@Column(nullable=false)
	private String cognome;
	
	@OneToMany(mappedBy = "utente",cascade = CascadeType.ALL)
	private Set<Biglietto> listaBiglietti;
	
	public Integer getId_utente() {
		return id_utente;
	}
	public void setId_utente(Integer id_utente) {
		this.id_utente = id_utente;
	}
	public Tessera getTessera() {
		return tessera;
	}
	public void setTessera(Tessera tessera) {
		this.tessera = tessera;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

}