package dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import model.Utente;
import utils.JpaUtil;

public class UtenteDAO {
//	  private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("buildWeek");
//	private static final EntityManager em = emf.createEntityManager();
//	private static final EntityTransaction t = em.getTransaction();
	
	private static final EntityManager em= JpaUtil.getEntityManagerFactory().createEntityManager();
	private static final EntityTransaction t=em.getTransaction();
	
	public static void saveUtente (Utente u) {
		try {
	t.begin();
	em.persist(u);
	t.commit();}
		catch(Exception e) {
			t.rollback();
			System.out.println("Errorino! "+e);
		} finally {
			em.close();
           
		}
	}
}
