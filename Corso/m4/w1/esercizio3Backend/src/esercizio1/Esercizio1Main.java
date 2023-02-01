package esercizio1;

public class Esercizio1Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String stringa="bananaInPigiama";
		int annettoBello=1992;
		
		System.out.println(stringaPariDispari(stringa));
		System.out.println(annoBisestile(annettoBello));
		
		
	}
	
	public static boolean stringaPariDispari(String str) {
		if(str.length()%2==0) { return true;
	} else return false;
}

public static boolean annoBisestile(int anno) {
		
		if(anno%4==0) {
			return true;
		} else if(anno%100==0 && anno%400==0) {
			return true;
		} else return false;
	}
	
}
