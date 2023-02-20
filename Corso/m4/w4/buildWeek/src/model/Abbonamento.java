package model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.*;

import enums.DurataAbb;

@Entity
public class Abbonamento {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer codice_univoco;
	@Column(nullable=false)
	private LocalDate data_emissione=LocalDate.now();
	@Column
	private LocalDate data_scadenza;
	@Column(nullable=false)
	@Enumerated(EnumType.STRING)
	private DurataAbb durata;
	@Column(nullable=false)
	private boolean validita_abbonamento=true;
//	@Column(nullable=false)
//	private Integer count_distributore;
//	@Column(nullable=false)
//	private Integer count_rivenditore;
	@Column
	private Tessera tessera;
	
	public Abbonamento() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getCodice_univoco() {
		return codice_univoco;
	}

	public void setCodice_univoco(Integer codice_univoco) {
		this.codice_univoco = codice_univoco;
	}

	public LocalDate getData_emissione() {
		return data_emissione;
	}

	public void setData_emissione(LocalDate data_emissione) {
		this.data_emissione = data_emissione;
	}

	public LocalDate getData_scadenza() {
		return data_scadenza;
	}
//METODINO PER SETTARE SCADENZA ABBONAMENTINO
	public void setData_scadenza(LocalDate data_emissione) {
		if(this.durata==DurataAbb.MENSILE) {
		this.data_scadenza=data_emissione.plusMonths(1);
		} else if(this.durata==DurataAbb.SETTIMANALE) {
			this.data_scadenza=data_emissione.plusWeeks(1);		}
		
		
	}

	public DurataAbb getDurata() {
		return durata;
	}

	public void setDurata(DurataAbb durata) {
		this.durata = durata;
	}

	public boolean isValidita() {
		return validita_abbonamento;
	}
//METODINO PER SETTARE VALIDITA DELL'ABBONAMENTO(DA PROVARE)
	public void setValidita(LocalDate emi,LocalDate scad) {
		if(emi.isAfter(scad)) {
			this.validita_abbonamento=false;
		}
	}

//	public Integer getCount_distributore() {
//		return count_distributore;
//	}
//
//	public void setCount_distributore(Integer count_distributore) {
//		this.count_distributore = count_distributore;
//	}
//
//	public Integer getCount_rivenditore() {
//		return count_rivenditore;
//	}
//
//	public void setCount_rivenditore(Integer count_rivenditore) {
//		this.count_rivenditore = count_rivenditore;
//	}

	public Tessera getTessera() {
		return tessera;
	}

	public void setTessera(Tessera tessera) {
		this.tessera = tessera;
	}

	@Override
	public String toString() {
		return "Abbonamento [codice_univoco=" + codice_univoco + ", data_emissione=" + data_emissione
				+ ", data_scadenza=" + data_scadenza + ", durata=" + durata + ", validita_abbonamento="
				+ validita_abbonamento + ", tessera=" + tessera + "]";
	}

	
}
