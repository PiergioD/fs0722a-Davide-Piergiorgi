package control;

import dao.PuntoEmissioneDAO;
import enums.DurataAbb;
import model.*;

public class MainProject {

	public static void main(String[] args) {
		
		DistributoreAutomatico atm = new DistributoreAutomatico();
		Utente u1= new Utente();
//		u1.setNumero_tessera(2);
//		u1.setNome("Bruno");
//		u1.setCognome("Uno");
//		
//		
//		atm.setUtente(u1);
//		atm.creaBiglietto();
		
		Tessera t1= new Tessera();
		
		
		System.out.println(t1);
		
	Abbonamento abb1=atm.creaAbbonamento(t1, DurataAbb.SETTIMANALE);
	abb1.setData_scadenza(abb1.getData_emissione());
	System.out.println(abb1);
	
	
	}

}
