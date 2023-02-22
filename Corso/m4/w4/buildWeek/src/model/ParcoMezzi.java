package model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;

import dao.BigliettoDAO;
import dao.UtenteDAO;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class ParcoMezzi implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id_mezzo;
	@Column(nullable = false)
	private boolean inServizio;
	@Column
	private Date dataInizioManutenzione;
	@Column
	private Date dataFineManutenzione;
	@Column
	private Integer counter_biglietti = 0;

	@OneToOne(mappedBy = "mezzo")
	private Tratta tratta;

	// il constructor nelle entita va sempre vuoto!!!
	public ParcoMezzi() {
		super();
	}

	public boolean isInServizio() {
		return inServizio;
	}

	public void setInServizio(boolean inServizio) {
		this.inServizio = inServizio;
	}

	public Date getDataInizioManutenzione() {
		return dataInizioManutenzione;
	}

	public void setDataInizioManutenzione(Date dataInizioManutenzione) {
		this.dataInizioManutenzione = dataInizioManutenzione;
	}

	public Date getDataFineManutenzione() {
		return dataFineManutenzione;
	}

	public void setDataFineManutenzione(Date dataFineManutenzione) {
		this.dataFineManutenzione = dataFineManutenzione;
	}

	public Tratta getTratta() {
		return tratta;
	}

	public void setTratta(Tratta tratta) {
		this.tratta = tratta;
	}

	public Integer getId_mezzo() {
		return id_mezzo;
	}

	public void setId_mezzo(Integer id_mezzo) {
		this.id_mezzo = id_mezzo;
	}

	public Integer getCounter_biglietti() {
		return counter_biglietti;
	}

	public void setCounter_biglietti(Integer counter_biglietti) {
		this.counter_biglietti = counter_biglietti;
	}

	public void counterPlus() {
		this.counter_biglietti++;
	}

	public void vidimaBigl(Utente u) {
		
		Set<Biglietto> listB = u.getListaBiglietti();
		List<Biglietto> listBigliettiValidi = listB.stream().filter(el->
		el.isValidita_biglietto() == true
				).collect(Collectors.toList());
		Biglietto biglietto = listBigliettiValidi.get(0);
		biglietto.setValidita_biglietto(false);
		biglietto.setData_vidima(LocalDate.now());
		this.counterPlus();
		BigliettoDAO.modificaBiglietto(biglietto);
		UtenteDAO.modificaUtente(u);
		
	}
	
	@Override
	public String toString() {
		return "ParcoMezzi [id_mezzo=" + id_mezzo + ", inServizio=" + inServizio + ", dataInizioManutenzione="
				+ dataInizioManutenzione + ", dataFineManutenzione=" + dataFineManutenzione + ", " + ", tratta="
				+ tratta + "]";
	}


}
