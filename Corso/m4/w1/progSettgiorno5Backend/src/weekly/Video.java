package weekly;

public class Video extends Audio {

	int luminosita;
	String lumStr = "*";
	
	public Video(String titolo, int dur) {
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
	
	public void play() {
		for(int i = 0;i<this.getDurata();i++) {
			System.out.println(this.getTitolo()+" "+this.volStr+" "+this.lumStr);			
		}
	}
	
	public String toString(){
		return super.toString()+" di tipo video, che dura: "+this.getDurata();
	}
		
}
