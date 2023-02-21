package model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import enums.Arrivi;
import enums.Partenze;

@Entity
public class Tratta {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_tratta;
	@Column
	private Partenze partenza;
	@Column
	private Arrivi arrivo;
	
	@OneToOne
	@JoinColumn(name = "id_mezzo")
	private ParcoMezzi mezzo;
	@Column
	private Integer durataMediaTrattainMinuti;
	public Integer getId_tratta() {
		return id_tratta;
	}
	public void setId_tratta(Integer id_tratta) {
		this.id_tratta = id_tratta;
	}
	public Partenze getPartenza() {
		return partenza;
	}
	public void setPartenza(Partenze partenza) {
		this.partenza = partenza;
	}
	public Arrivi getArrivo() {
		return arrivo;
	}
	public void setArrivo(Arrivi arrivo) {
		this.arrivo = arrivo;
	}
	
	public ParcoMezzi getMezzo() {
		return mezzo;
	}
	public void setMezzo(ParcoMezzi mezzo) {
		this.mezzo = mezzo;
	}
	public Integer getDurataMediaTrattainMinuti() {
		return durataMediaTrattainMinuti;
	}
	public void setDurataMediaTrattainMinuti(Integer durataMediaTrattainMinuti) {
		this.durataMediaTrattainMinuti = durataMediaTrattainMinuti;
	}
	public Tratta() {
		super();
	}
	
	
}
