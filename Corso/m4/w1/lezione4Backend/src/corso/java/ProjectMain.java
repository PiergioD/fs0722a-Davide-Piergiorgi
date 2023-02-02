package corso.java;

public class ProjectMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Automobile a = new Automobile("fiat","500","ABC123",1200,3);
Automobile g = new Automobile("fiesta","gi","ADF123",1200,3);
Moto m = new Moto("Yamaha","R1","QWErty",1000,1);
Moto f = new Moto("Boh","Banana","QWErty1222",1000,2);
m.acc();

Veicolo[] autostrada = new Veicolo[10];
autostrada[0]=a;
autostrada[1]=m;
autostrada[2]=g;
autostrada[3]=f;

for(int i =0;i<autostrada.length;i++) {
	if(autostrada[i] instanceof Automobile) {
		System.out.println(autostrada[i].getMarca()+" "+autostrada[i].getModello()+ " porte: ");
	}
	System.out.println(autostrada[i].getMarca());
}
	}

}
