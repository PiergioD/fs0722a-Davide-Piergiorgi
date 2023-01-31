package esercizio1;

public class Rettangolo {

	int altezza;
	int larghezza;
	
	// constructor
	public Rettangolo(int larghezza,int altezza) {
		this.altezza=altezza;
		this.larghezza=larghezza;
	}

	public int areaRettangolo() {
		return this.altezza*this.larghezza;
	};
	
	public int perimetroRettangolo() {
		return (this.altezza+this.larghezza)*2;
	}
	
	
	public void stampaRettangolo() {
		System.out.println(this.areaRettangolo()+ " "+ this.perimetroRettangolo());
		
	}
	
	
	
	
	
}
