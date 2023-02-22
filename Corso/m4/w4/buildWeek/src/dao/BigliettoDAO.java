package dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import model.Biglietto;

import utils.JpaUtil;

public class BigliettoDAO {
	private static final EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	private static final EntityTransaction t = em.getTransaction();

	
	
	// SALVA ParcoMezzi
		public static void saveBiglietto (Biglietto u) {
			
		t.begin();
		em.persist(u);
		t.commit();
		System.out.println("Biglietto aggiunto al data base");

			
		}
		
		//CERCA abonnamneto
		public static Biglietto cercaBiglietto(Integer id_ParcoMezzi) {
				t.begin();
			Biglietto u=	em.find(Biglietto.class, id_ParcoMezzi);
			t.commit();
			System.out.println("Biglietto ricercato secondo id: "+id_ParcoMezzi);
			return u;
		
	}
		
	// ELIMINA BY ID tessera
	public static void deletaBiglietto(Integer id) {
		
		Biglietto tes= cercaBiglietto(id);
	    t.begin();
	    em.remove(tes);
	    t.commit();
	    System.out.println("Biglietto eliminato");
	}
		
		// MODIFICA ParcoMezzi
	public static void modificaBiglietto(Biglietto u) {
		
		t.begin();
	    em.merge(u);
	    t.commit();
		
		System.out.println("Biglietto modificato");
		
	}
}
