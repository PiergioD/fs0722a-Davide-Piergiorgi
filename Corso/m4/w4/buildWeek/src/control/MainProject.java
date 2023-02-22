package control;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import dao.AbbonamentoDAO;
import dao.PuntoEmissioneDAO;
import dao.TesseraDAO;
import dao.UtenteDAO;
import enums.DurataAbb;
import model.*;
import utils.JpaUtil;

public class MainProject {
	private static final EntityManager em= JpaUtil.getEntityManagerFactory().createEntityManager();
	private static final EntityTransaction t=em.getTransaction();
	public static void main(String[] args) {
		
		try {
		
//		DistributoreAutomatico atm = new DistributoreAutomatico();
//		Utente u1= new Utente();
//		Tessera t1= new Tessera();
//		
//		
//		//System.out.println(abb1);
//	
//		
////		u1.setTessera(t1);
////		u1.setNome("Gino");
////		u1.setCognome("Il porcospino");
////		
////		
////		atm.setUtente(u1);
////		atm.creaBiglietto();
//		
//		
//		//Utente presodalDatabase=UtenteDAO.cercaUtente(2);
//		//System.out.println(presodalDatabase);
//		//TesseraDAO.saveTessera(t1);
//		Tessera tesPresa= TesseraDAO.cercaTessera(1);
//	
//		Abbonamento abb1= new Abbonamento();
//		
//		Abbonamento abbRecuperato = AbbonamentoDAO.cercaAbbonamento(1);
//		System.out.println(abbRecuperato);
//		
//		//Abbonamento abbPreso=AbbonamentoDAO.cercaAbbonamento(1);
//		//System.out.println(abb1);
//		//AbbonamentoDAO.saveAbbonamento(abb1);
//		atm.setAbbonamento(abbRecuperato, tesPresa);
//		
//		System.out.println(tesPresa);
//		
//		TesseraDAO.modificaTessera(tesPresa);
//		
//		//System.out.println(t1);
//		
////	Abbonamento abb1=atm.creaAbbonamento(t1, DurataAbb.SETTIMANALE);
////	abb1.setData_scadenza(abb1.getData_emissione());
////	System.out.println(abb1);
			
			
			//CREIAMO UN UTENTE E LO METTIAMO NEL DATA BASE
			Utente u1 = new Utente();
			
			u1.setNome("CHeBelloILBackend");
			u1.setCognome("Gesooh");
			
			//UtenteDAO.saveUtente(u1);
			
			// CREIAMO UNA TESSERA E LA METTIAMO NEL DATABASE
			
			Tessera t1 = new Tessera();
			
			//TesseraDAO.saveTessera(t1);
			
			// cREAIMO ABBONAMENTO E LO METTIAMO NEL DATABASE
			
			Abbonamento abb1=new Abbonamento();
			
			abb1.setDurata(DurataAbb.MENSILE);
			abb1.setData_scadenza(abb1.getData_emissione());
			
			//AbbonamentoDAO.saveAbbonamento(abb1);
			
			
			
			// Estrapoliamo dati dal databse
			
			Utente utentePreso= UtenteDAO.cercaUtente(1);
			Tessera tesseraPresa= TesseraDAO.cercaTessera(1);
			Abbonamento abbPreso= AbbonamentoDAO.cercaAbbonamento(1);
			
			// CREIAMO OGGETTO PUNTO EMISSIONE
			
			DistributoreAutomatico atm=new DistributoreAutomatico();
			//setti in abbonamento la tessera
			atm.setAbbonamento(abbPreso, tesseraPresa);
			
			System.out.println(tesseraPresa);
			
			
			// AGGIONRAMENTO OGGETTO UTENTE NEL DATABASE PERCHE ABBIAMO MESSO UN ATTRIBUTO IN PIU
			UtenteDAO.modificaUtente(utentePreso);
			
			
			
			
			
		} catch(Exception e) {
			em.getTransaction().rollback();
		}finally {
            em.close();
        
        }
	
	}

}
