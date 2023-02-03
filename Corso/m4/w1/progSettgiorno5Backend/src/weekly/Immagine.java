package weekly;

public class Immagine extends ElementoMultimediale {
	
	int luminosita;
	String lumStr = "*";
	
	public Immagine(String titolo, int dur) {
		super(titolo, dur);
		this.luminosita=1;
	}
	
	public void alzaLuminosita(){
		if(this.luminosita == 5) {
			System.out.println("Luminosita' al massimo");
		}else {
			this.luminosita += 1;
			this.lumStr += "*";
			System.out.println("Luminosita' alzata, nuovo livello: "+this.luminosita);
		}
	}
	
	public int abbassaLuminosita(){
		switch(this.luminosita) {
			case 0:
				System.out.println("Volume al minimo");
				break;
			case 1:
				this.luminosita-=1;
				this.lumStr="";
				break;
			case 2:
				this.luminosita-=1;
				this.lumStr="*";
				break;
			case 3:
				this.luminosita-=1;
				this.lumStr="**";
				break;
			case 4:
				this.luminosita-=1;
				this.lumStr="***";
				break;
			case 5:
				this.luminosita-=1;
				this.lumStr="****";
				break;
		}
		return this.luminosita;
	}
	
	public void show() {
		System.out.println(this.getTitolo()+" "+this.lumStr);
	}

	@Override
	protected void play() {
		// TODO Auto-generated method stub
		
	}
	
	public String toString(){
		return super.toString()+" di tipo immagine.";
	}


}
