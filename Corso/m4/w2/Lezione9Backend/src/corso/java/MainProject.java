package corso.java;

import java.util.ArrayList;
import java.util.List;

public class MainProject {
static List<String> lista=new ArrayList<String>();
	public static void main(String[] args) {
	
	lista.add("primo");
	lista.add("secondo");
	lista.add("terzo");

		// tipologie di funzioni lambda
		// ()->Sysyem.out.println("Funzione lambda");
		// (String s)->Sysyem.out.println("Funzione lambda "+s);
		// String s -> Sysyem.out.println("Funzione lambda "+s);
		
		
//Soluzione1
		ClasseConcreta c = new ClasseConcreta();
		stampaMessaggio(c);
		
		
		// SOluzione 2
		stampaMessaggio(new ClasseConcreta());
		
		// Soluzione 3
		stampaMessaggio(new IMessage() {

			@Override
			public String getMessage() {
				// TODO Auto-generated method stub
				return "ClasseAnonima Message";
			}
			
		});
		
		
		//Soluzione 4
		// con una lambda posso andare gia a definire la logica di run!
		// senza stare a scrivere una classe thread che definiva la logica
		Thread t3= new Thread(()->{
			for(int i =0;i<10;i++) {
				System.out.println(i);
			}
		});
		
		t3.start();
	}

	public static void stampaMessaggio(IMessage m) {
		System.out.println(m.getMessage());
	}
	
	
	public static void stampalista() {
		lista.forEach(ele->System.out.println(ele));
	}
}
