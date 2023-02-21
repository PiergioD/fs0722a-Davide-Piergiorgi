package model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

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

@Entity
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
public abstract class ParcoMezzi implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id_mezzo;
	@Column(nullable=false)
	private boolean inServizio;
	@Column
	private Date dataInizioManutenzione;
	@Column
	private Date dataFineManutenzione;
	
	
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

	@Override
	public String toString() {
		return "ParcoMezzi [id_mezzo=" + id_mezzo + ", inServizio=" + inServizio + ", dataInizioManutenzione="
				+ dataInizioManutenzione + ", dataFineManutenzione=" + dataFineManutenzione + ", "
				+ ", tratta=" + tratta + "]";
	}
	
	
	
	
	
}
