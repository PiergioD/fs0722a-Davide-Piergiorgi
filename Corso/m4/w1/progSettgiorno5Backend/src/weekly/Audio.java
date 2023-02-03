package weekly;

public class Audio extends ElementoMultimediale {

	int volume;
	String volStr = "!";
	
	public Audio(String titolo, int dur) {
		super(titolo, dur);
		this.volume=1;
	}
	
	public void alzaVolume(){
		if(this.volume == 5) {
			System.out.println("Volume al massimo");
		}else {
			this.volume += 1;
			this.volStr += "!";
			System.out.println("Volume alzato, nuovo livello: "+this.volume);
		}
	}
	
	public int abbassaVolume(){
		switch(this.volume) {
			case 0:
				System.out.println("Volume al minimo");
				break;
			case 1:
				this.volume-=1;
				this.volStr="";
				break;
			case 2:
				this.volume-=1;
				this.volStr="!";
				break;
			case 3:
				this.volume-=1;
				this.volStr="!!";
				break;
			case 4:
				this.volume-=1;
				this.volStr="!!!";
				break;
			case 5:
				this.volume-=1;
				this.volStr="!!!!";
				break;
		}
		return this.volume;
	}
	
	public void play() {
		for(int i = 0;i<this.getDurata();i++) {
			System.out.println(this.getTitolo()+" "+this.volStr);			
		}
	}

	@Override
	protected void show() {
		// TODO Auto-generated method stub
		
	}
	public String toString(){
		return super.toString()+" di tipo audio, che dura: "+this.getDurata();
	}
}
