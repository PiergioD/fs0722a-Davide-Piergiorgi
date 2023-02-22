package dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import model.Tessera;
import model.Utente;
import utils.JpaUtil;

public class TesseraDAO {

	private static final EntityManager em= JpaUtil.getEntityManagerFactory().createEntityManager();
	private static final EntityTransaction t=em.getTransaction();
	
	
	
	
	// SALVA tessera
	public static void saveTessera (Tessera u) {
		
	t.begin();
	em.persist(u);
	t.commit();
	System.out.println("Tessera aggiunto al data base");

		
	}
	
	//CERCA TEssera
	public static Tessera cercaTessera(Integer id_tessera) {
			t.begin();
		Tessera u=	em.find(Tessera.class, id_tessera);
		t.commit();
		System.out.println("Tessera ricercato secondo id: "+id_tessera);
		return u;
	
}
	
// ELIMINA BY ID tessera
public static void deletaUtente(Integer id) {
	
	Tessera tes= cercaTessera(id);
    t.begin();
    em.remove(tes);
    t.commit();
    System.out.println("Tessera eliminato");
}
	
	// MODIFICA UTENTE
public static void modificaTessera(Tessera u) {
	
	em.refresh(u);
	
	System.out.println("Tessera modificato");
	
}
	
	
}
