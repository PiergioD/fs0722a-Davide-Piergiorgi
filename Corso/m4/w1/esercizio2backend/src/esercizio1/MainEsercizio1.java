package esercizio1;

public class MainEsercizio1 {

	public static void main(String[] args) {
		
		Rettangolo r= new Rettangolo(10,20);
		Rettangolo r1= new Rettangolo(20,30);
		
		
		r.stampaRettangolo();
		r1.stampaRettangolo();
	
		
		stampaDueRettangoli(r,r1);
		
	
	}

		
		public static void stampaDueRettangoli(Rettangolo re1, Rettangolo re2) {
			 
			 int areaR1= re1.areaRettangolo();
			 int perR1=re1.perimetroRettangolo();
			 int areaR2=re2.areaRettangolo();
			 int perR2=re2.perimetroRettangolo();
			 
			
			//System.out.println(areaR1+" "+perR1);
			 //System.out.println(areaR2 + " " + perR2);
			 
			 System.out.println("Somma delle aree dei due rettangoli: "+ (areaR1+areaR2));
			 System.out.println("Somma dei perimetri dei due rettangoli: "+ (perR2+perR1));
			 
		}

	

}
