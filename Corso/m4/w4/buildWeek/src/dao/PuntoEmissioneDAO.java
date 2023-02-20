package dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;


import model.PuntoEmissione;
import utils.JpaUtil;

public class PuntoEmissioneDAO {

	private static final EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	private static final EntityTransaction t = em.getTransaction();

	public static void save(PuntoEmissione object) {
		
		try {
			PuntoEmissione ap = object;
			
			t.begin();
			em.persist(ap);
			t.commit();
			
			System.out.println("Articolo inserito correttamente!");
		}
		catch(Exception e) {
			System.out.println("Errore nell'inserimento del punto di emissione");
		}
	}
	
}
