package control;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import dao.ParcoMezziDAO;
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
//		ParcoMezzi abb1= new ParcoMezzi();
//		
//		ParcoMezzi abbRecuperato = ParcoMezziDAO.cercaParcoMezzi(1);
//		System.out.println(abbRecuperato);
//		
//		//ParcoMezzi abbPreso=ParcoMezziDAO.cercaParcoMezzi(1);
//		//System.out.println(abb1);
//		//ParcoMezziDAO.saveParcoMezzi(abb1);
//		atm.setParcoMezzi(abbRecuperato, tesPresa);
//		
//		System.out.println(tesPresa);
//		
//		TesseraDAO.modificaTessera(tesPresa);
//		
//		//System.out.println(t1);
//		
////	ParcoMezzi abb1=atm.creaParcoMezzi(t1, DurataAbb.SETTIMANALE);
////	abb1.setData_scadenza(abb1.getData_emissione());
////	System.out.println(abb1);
			
			
			//CREIAMO UN UTENTE E LO METTIAMO NEL DATA BASE
			//Utente u1 = new Utente();
			
			//u1.setNome("CHeBelloILBackend");
			//u1.setCognome("Gesooh");
			//Tessera t1 = new Tessera();
			//u1.setTessera(t1);
			//TesseraDAO.saveTessera(t1);
			//UtenteDAO.saveUtente(u1);
			
			// CREIAMO UNA TESSERA E LA METTIAMO NEL DATABASE
			
			
			
			// cREAIMO ParcoMezzi E LO METTIAMO NEL DATABASE
			
			//ParcoMezzi abb1=new ParcoMezzi();
			
			//abb1.setDurata(DurataAbb.MENSILE);
			//abb1.setData_scadenza(abb1.getData_emissione());
			
			//ParcoMezziDAO.saveParcoMezzi(abb1);
			
			
			
			// Estrapoliamo dati dal databse
			
			//Utente utentePreso= UtenteDAO.cercaUtente(1);
			//Tessera tesseraPresa= TesseraDAO.cercaTessera(1);
			//ParcoMezzi abbPreso= ParcoMezziDAO.cercaParcoMezzi(1);
			
			// CREIAMO OGGETTO PUNTO EMISSIONE
			
			//DistributoreAutomatico atm=new DistributoreAutomatico();
			//setti in ParcoMezzi la tessera
			//atm.setParcoMezzi(abbPreso, tesseraPresa);
			
			//System.out.println(tesseraPresa);
			
			
			// AGGIONRAMENTO OGGETTO UTENTE NEL DATABASE PERCHE ABBIAMO MESSO UN ATTRIBUTO IN PIU
			//UtenteDAO.modificaUtente(utentePreso);
			
			//DistributoreAutomatico atm = new DistributoreAutomatico();
			//RivenditoreAutorizzato tabaccaio = new RivenditoreAutorizzato();
			//Utente guy = new Utente();
			//guy.setCognome("Fieri");
			//guy.setNome("Guy");
			//UtenteDAO.saveUtente(guy);
			//PuntoEmissioneDAO.savePunto(atm);
			//PuntoEmissioneDAO.savePunto(tabaccaio);
			Utente guy = UtenteDAO.cercaUtente(2);
		
			
			
			
			//PuntoEmissione atm = PuntoEmissioneDAO.cercaPunto(3);
			//PuntoEmissioneDAO.compraBiglietto(guy, atm);
			//TesseraDAO.creaTesseract(guy);
			//PuntoEmissioneDAO.compraParcoMezzi(guy, atm, DurataAbb.SETTIMANALE);
			
			
			
			
			
			
		} catch(Exception e) {
			em.getTransaction().rollback();
		}finally {
            em.close();
        
        }
	
	}

}
