package weekly;

abstract class ElementoMultimediale {
	
	private String titolo;
	private int durata;

	
	public ElementoMultimediale(String titolo,int dur) {
		this.titolo=titolo;
		if(dur < 0) {
			System.out.println("La durata deve essere un numero positivo");
			this.durata=1;
		}else {
			this.durata=dur;
		}
	}
	
	public String getTitolo() {
		return titolo;
	}
	
	public int getDurata() {
		return durata;
	}

	protected abstract void play();

	protected abstract void show();

	@Override 
	public String toString(){
		return "Elemento "+this.titolo;
	}
}
