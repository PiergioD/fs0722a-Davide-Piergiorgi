package test.log;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class MainProject {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// definisco un logger, invece di utilizzare system.out.print
		Logger log = LoggerFactory.getLogger(MainProject.class);
		
		
		// utilizzo il logger per poter stampare in console!
		log.info("test Logger!");
		
		// collections è un interfccia e non si puo istanziare! 
		// si puo istanziare un oggetto da una classe reale che implementa collection
		Collection<String> c = new ArrayList<String>();
		// array list è una classe che impkementa linterfaccia collection
		
		// collection non memorizza l'rdine in cui sono memorizzati gli elementi
		// non definisce se ci possono essere valori duplicati
		// non puo contenere valori primitivi
		
		// questo è il push dell'elemento nellarray di js
		c.add("Primo elemento");
		c.add("Secondo Elemento");
		
		// svuoto tutto l'aray
		c.clear();
		
		
		
		//  la collection è vuota o no
		c.isEmpty();
		
		// rimuovere elemento da collection
		c.remove("Primo elemento");
		
		// array.length
		c.size();
		
		// valore booleano di rtitorno che midice se contiene questo elemento
		boolean b =c.contains("Secondo Elemento");
		// mi devi stampare una stringa, non booleano!
		log.info("Contains 'secondo elemento': "+b);
		
		
		////////////////////////////////////////////////////////////////////
		
		// implmenta anche le icollection
		// creo sempre un oggetto concreto cje viene gestito da interfaccia list
		List<String> l = new ArrayList <String>();
		
		l.add("primo elemento");
		l.add("secondo elemento");
		// oggetti sono ordinati in base allrodine di inserimento
		// una lista puo contenere duplicati
		// consente di aggiungere elementi speicificando lindice 
		// consente di leggere elementi speicificando l'indice
		
	// avendo anche i metodi del collection, ho anche i metodi di list
		
		// prendo leemento e leggimelo a indice 0
		l.get(0);
		
		// scrivo elemento a indice 0
		l.set(0, "primo elemento modificato");
		
		// dammi lindicie di uno speicfico elemento
		l.indexOf("secondo elemento");
		
		// trasformo la lista in un array di stringhe
		Object[] strArr = l.toArray();
		
		/////////////////////////////////////////
		Set<String> s = new HashSet<String>();
		// gli oggetti non sono ordinati
		// non puo contenere duplicati
		
		// ho gli stessi metodi del collectibles
		s.add("primo elemento");
		
		/////////////////////////////////////////////
		Map<String,String> m = new HashMap<String,String>();
		
		// put è equivalente di add in map
		m.put("a", "primo elemento");
		// una mappa mi permette di aggiunger elemente
		///////////////////////////////////////
		// linked list implementa queue
		Queue<String> q = new LinkedList<String>();
		
		q.add("primo elemento");
		q.add("secondo elemento");
		
		// metodo per leggere il primo elemento della coda
		String primoPeek =q.peek();
		// come il pop di js, ritorna primo elemento e lo elimina
		String primoPoll=q.poll();
		
		
		
		
		// metodi dei collectibles sempre presenti anche nelle queue
		
	}
	

	
}
