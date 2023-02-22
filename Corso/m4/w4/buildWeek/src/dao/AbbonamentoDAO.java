package dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import model.ParcoMezzi;
import model.Tessera;
import model.Utente;
import utils.JpaUtil;

public class ParcoMezziDAO {
	private static final EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	private static final EntityTransaction t = em.getTransaction();

	
	
	// SALVA ParcoMezzi
		public static void saveParcoMezzi (ParcoMezzi u) {
			
		t.begin();
		em.persist(u);
		t.commit();
		System.out.println("ParcoMezzi aggiunto al data base");

			
		}
		
		//CERCA abonnamneto
		public static ParcoMezzi cercaParcoMezzi(Integer id_ParcoMezzi) {
				t.begin();
			ParcoMezzi u=	em.find(ParcoMezzi.class, id_ParcoMezzi);
			t.commit();
			System.out.println("Abbonamneto ricercato secondo id: "+id_ParcoMezzi);
			return u;
		
	}
		
	// ELIMINA BY ID tessera
	public static void deletaParcoMezzi(Integer id) {
		
		ParcoMezzi tes= cercaParcoMezzi(id);
	    t.begin();
	    em.remove(tes);
	    t.commit();
	    System.out.println("ParcoMezzi eliminato");
	}
		
		// MODIFICA ParcoMezzi
	public static void modificaParcoMezzi(ParcoMezzi u) {
		
		t.begin();
	    em.merge(u);
	    t.commit();
		
		System.out.println("ParcoMezzi modificato");
		
	}
	
	public static void checkValiditaAbb(Utente u) {
		Tessera tess = u.getTessera();
		ParcoMezzi abb = tess.getParcoMezzi();
		if(abb.isValidita() == true) {
			System.out.println("ParcoMezzi valido!");
		}else
			System.out.println("ParcoMezzi non valido!");
	}
}
