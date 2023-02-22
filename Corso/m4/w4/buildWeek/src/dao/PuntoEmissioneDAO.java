package dao;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import enums.DurataAbb;
import model.Abbonamento;
import model.Biglietto;
import model.PuntoEmissione;
import model.Tessera;
import model.Utente;
import utils.JpaUtil;

public class PuntoEmissioneDAO {

	private static final EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	private static final EntityTransaction t = em.getTransaction();

	// SALVA tpunto
	public static void savePunto(PuntoEmissione u) {

		t.begin();
		em.persist(u);
		t.commit();
		System.out.println("Punto di emissione aggiunto al data base");

	}

	// CERCA punto
	public static PuntoEmissione cercaPunto(Integer id_tessera) {
		t.begin();
		PuntoEmissione u = em.find(PuntoEmissione.class, id_tessera);
		t.commit();
		System.out.println("PUnto emissione ricercato secondo id: " + id_tessera);
		return u;

	}

	// ELIMINA BY ID punto
	public static void deletaPunto(Integer id) {

		PuntoEmissione tes = cercaPunto(id);
		t.begin();
		em.remove(tes);
		t.commit();
		System.out.println("PuntoEmissione eliminato");
	}

	// MODIFICA punto
	public static void modificaPunto(PuntoEmissione u) {

		t.begin();
		em.merge(u);
		t.commit();

		System.out.println("PuntoEmissione modificato");

	}

	// FUNZIONE PER ComprareBIGLIETTO!
	public static Biglietto compraBiglietto(Utente utente, PuntoEmissione atm) {
		Biglietto b = new Biglietto();
		Set<Biglietto> listaB = new HashSet<Biglietto>();
		b.setData_emissione(LocalDate.now());
		b.setUtente(utente);
		atm.setCounter_biglietti(atm.getCounter_biglietti() + 1);
		listaB.add(b);
		utente.setListaBiglietti(listaB);
		UtenteDAO.modificaUtente(utente);
		modificaPunto(atm);
		System.out.println("Biglietto comprato! comprato da " + utente.getNome() + " " + utente.getCognome());
		return b;

	}

	// FUNZIONE PER COMPRARE ABBONAMENTO
	public static void compraAbbonamento(Utente u, PuntoEmissione atm, DurataAbb durata) {
		
		// se l'utente ha la tessera fa fuori if, se nn ce lha fa prima latessera 
		if (u.getTessera() == null) {
			
			TesseraDAO.creaTesseract(u);
			
		} 
		Abbonamento abb = new Abbonamento();
		abb.setDurata(durata);
		abb.setData_scadenza(abb.getData_emissione());
		AbbonamentoDAO.saveAbbonamento(abb);
		Abbonamento abbPreso = AbbonamentoDAO.cercaAbbonamento(abb.getCodice_univoco());
		atm.setAbbonamentiCompleto(abbPreso, u.getTessera());
		TesseraDAO.modificaTessera(u.getTessera());
		modificaPunto(atm);

		System.out.println("Abbonamento comprato! comprato da " + u.getNome() + " " + u.getCognome()
				+ " con numero tessera: " + u.getTessera());

		
		
	}

}
