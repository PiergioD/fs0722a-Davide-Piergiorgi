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
			
			
			//CREIAMO UN iSTANZE E LO METTIAMO NEL DATA BASE
			Utente u1 = new Utente();
			Tessera t1 = new Tessera();
			DistributoreAutomatico atm=new DistributoreAutomatico();
			RivenditoreAutorizzato gino= new RivenditoreAutorizzato();
			
			u1.setNome("Pazzi si");
			u1.setCognome("Pazzo per gessoooh");
			
			
			
			
			
			//MWETODI CRUD PER SALLVARE
			//UtenteDAO.saveUtente(u1);
			//TesseraDAO.saveTessera(t1);
			//PuntoEmissioneDAO.savePunto(atm);
			//PuntoEmissioneDAO.savePunto(gino);
			
			
			
			
			// Estrapoliamo dati dal databse
			Utente utentePreso= UtenteDAO.cercaUtente(3);
//			Tessera tesseraPresa= TesseraDAO.cercaTessera(1);
//			Abbonamento abbPreso= AbbonamentoDAO.cercaAbbonamento(1);
//			PuntoEmissione distrPreso=PuntoEmissioneDAO.cercaPunto(1);
//			PuntoEmissione ginoPreso=PuntoEmissioneDAO.cercaPunto(2);
			
			
			
			// SETTIAMO LE PROPRIETA PRESE
			//utentePreso.setTessera(tesseraPresa);
		
			//UtenteDAO.modificaUtente(utentePreso);
			//PuntoEmissioneDAO.compraBiglietto(utentePreso, gino);
			PuntoEmissioneDAO.compraAbbonamento(utentePreso, gino,DurataAbb.MENSILE);
			
			
			
			System.out.println(utentePreso.getTessera());
			System.out.println(utentePreso.getListaBiglietti());
			
			
			
			
			
			
			// AGGIONRAMENTO OGGETTO UTENTE NEL DATABASE PERCHE ABBIAMO MESSO UN ATTRIBUTO IN PIU
			//UtenteDAO.modificaUtente(utentePreso);
			//TesseraDAO.modificaTessera(tesseraPresa);
			
			
			
			
		} catch(Exception e) {
			em.getTransaction().rollback();
		}finally {
            em.close();
        
        }
	
	}

}
