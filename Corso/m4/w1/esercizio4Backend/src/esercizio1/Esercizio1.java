package esercizio1;

public class Esercizio1 {

	public static void main(String[] args) {
	
		
		
		Dipendente luigino= new Dipendente("123",Dipartimento.Produzione);
		Dipendente eleuterio=new Dipendente("456",Dipartimento.Vendite);
		Dipendente giuseppina= new Dipendente("789",1500,23,Livello.Impiegato,Dipartimento.Amministrazione);
		Dipendente riccardinoFuffolo= new Dipendente("111",2000,6,Livello.Dirigente,Dipartimento.Produzione);
		luigino.calcolaPaga(luigino);
		luigino.promuovi();
		luigino.stampaDatiDipendente();
		eleuterio.stampaDatiDipendente();
		giuseppina.stampaDatiDipendente();
		riccardinoFuffolo.stampaDatiDipendente();
		luigino.calcolaPagaMensileconStraordinario(luigino, 20);
		
		
	}
	
	
	
	
	
	

}
