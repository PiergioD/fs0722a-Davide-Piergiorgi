package contoCorrente;

public class ContoCorrenteMainProject {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		ContoCorrente rossi=new ContoCorrente("Famiglia Rossi");
		ContoCorrente verdi=new ContoCorrente("Famiglia Verdi");
		
		rossi.deposito(400);
		verdi.deposito(500);
		
		Bancomat b1=new Bancomat(verdi);
		Bancomat b2 = new Bancomat(verdi);
		Bancomat b3= new Bancomat(rossi);
		
		// lo start richiama il metodo run!
		b1.start();
		// su un altro thread richiama un altro run!
		b2.start();
	}

}
