package Esercizio;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class EsercizioMainProject {
	
	
	public static List<Product> listaProdotti = new ArrayList<Product>();
	
	 
	
	public static void main(String[] args) {
		
		Product prodotto1 = new Product("1","PerchèNonVaLaConsole","rivista",5.90);
		Product prodotto2 = new Product("2","QuantoMipiaceAngular","Book",120);
		Product prodotto3 = new Product("3","ComeNonAvereUnCrolloNervosoProgrammando","Book",30);
		Product prodotto4 = new Product("4","QuantoMiDiverteJava","Book",105);
		Product prodotto5 = new Product("5","GliStreamSonoDeiMariouli","rivista",5.20);
		Product prodotto6 = new Product("6","PannoloneDaPitone","Baby",3.23);
		Product prodotto7 = new Product("7","CiuccioDaBacucco","Baby",	4.89);
		Product prodotto8 = new Product("8","MotorelloBello","Boys",150);
		Product prodotto9 = new Product("9","MacchininaBellina","Boys",349.99);
		Product prodotto10 = new Product("10","OcchialiZarri","Boys",45.90);

		listaProdotti.add(prodotto1);
		listaProdotti.add(prodotto2);
		listaProdotti.add(prodotto3);
		listaProdotti.add(prodotto4);
		listaProdotti.add(prodotto5);
		listaProdotti.add(prodotto6);
		listaProdotti.add(prodotto7);
		listaProdotti.add(prodotto8);
		listaProdotti.add(prodotto9);
		listaProdotti.add(prodotto10);
		
		
		
		//ESercizio 1
		List<Product> booksCostosi = listaProdotti.stream().filter(ele->ele.getPrice()>100 && ele.getCategory()=="Book").collect(Collectors.toList());;
		
			booksCostosi.forEach(ele->System.out.println("Nome libro: "+ele.getName()+ " prezzo Danari: "+ele.getPrice()));
			
			
		//Esercizio2	
			Customer eleuterio = new Customer(1,"Eleuterio",2);
			 LocalDate date =LocalDate.now();
			 LocalDate tomorrow=date.plusDays(4);
		Order ordine1 = new Order(1, "available", date, tomorrow, listaProdotti, eleuterio);
		
		List<Product> prodottiBaby = ordine1.getProducts().stream().filter(ele->ele.getCategory()=="Baby").collect(Collectors.toList());
		
		prodottiBaby.forEach(ele->System.out.println("Nome Prodotto: "+ele.getName()+ " prezzo Danari: "+ele.getPrice()+" categoria: "+ele.getCategory()+" giorno di Acquisto: "+ordine1.getOrderDate()+" giorno di Arrivo: "+ordine1.getDeliveryDate()));
		
		// esercizio3
		//List<Product> prodottiBoyz = listaProdotti.stream().filter(ele->ele.getCategory()=="Boys").map(ele->{ele.setPrice(ele.getPrice()*0.9); return p;}).collect(Collectors.toList());
		
		
		//prodottiBoyz.forEach(ele->System.out.println("Nome Prodotto: "+ele.getName()+ " prezzo Danari: "+ele.getPrice()+" categoria: "+ele.getCategory()+" giorno di Acquisto: "+ordine1.getOrderDate()+" giorno di Arrivo: "+ordine1.getDeliveryDate()));
		
		
	}
	
	

}
