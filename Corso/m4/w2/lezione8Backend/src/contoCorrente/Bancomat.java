package contoCorrente;

public class Bancomat extends Thread {
private ContoCorrente conto;


// il bancomat puo essere utilizzato da piu persone contemporaneamente
public Bancomat(ContoCorrente conto) {
	
	this.conto = conto;
}


// io faccio si che se u n thread sta utilizzando un prelievo, finche non finisce quel threaad quel metodo non lo potra utilizzare nessunaltro!
public synchronized void preleva(double fondi) {
	if(this.conto.controlloPrelievo(fondi)) {
		this.conto.prelievo(fondi);
		System.out.println("Prelievo Effettuato su "+this.conto);
	}
}

@Override
public void run() {
	for(int i =0;i<5;i++) {
		this.preleva(100);
	}



}}
