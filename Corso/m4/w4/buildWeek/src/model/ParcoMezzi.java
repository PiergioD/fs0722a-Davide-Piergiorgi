package model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
public abstract class ParcoMezzi {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_mezzo;
	@Column(nullable=false)
	private boolean inServizio;
	@Column
	private Date dataInizioManutenzione;
	@Column
	private Date dataFineManutenzione;
	@Column
	private Set<Biglietto> biglietti;
	
	// il constructor nelle entita va sempre vuoto!!!
	public ParcoMezzi() {
		super();
	}
	
	
	
	
	
}
