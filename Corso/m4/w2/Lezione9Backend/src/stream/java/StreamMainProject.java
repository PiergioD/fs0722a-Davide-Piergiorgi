package stream.java;

import java.lang.System.Logger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.slf4j.LoggerFactory;

public class StreamMainProject {
	

	static List<String> lista = new ArrayList<String>();
	// metodo alternativo per creare lista
	static List<String> lista1 = Arrays.asList("Test1", "test2", "test3");

	public static void main(String[] args) {
		lista.add("Angular");
		lista.add("CorsoEpicode");
		lista.add("JavaSpring");

		// lista.forEach(ele -> System.out.println(ele));
		// lista1.forEach(ele -> System.out.println(ele));

		// tratto la collection come uno stream di dati! con stream() e cosi posso
		// utuilizzare dei moetodi per lo stream!
		// filter mi ritorna uno stream in questo caso di stringhe
		// posso concatenare anche tutte i metodi che voglio!
		// lista-> viene filtrata-> dati usciti filtrati verranno messi nella map e poi aggiunti con il punto esclamativo
		// reduce-> valore iniziale dal quale partire, il secondo e la logica
		Stream<String> listaFiltrata = lista.stream().filter(ele -> ele.length() >= 8).map(ele->ele+"!");
				//.collect(Collectors.toList());
		// con collect ho chiusp lo stream
		
		// riapro la stream utilizzando stream() e faccio reduce e lo printo
		String s = listaFiltrata.reduce("",(acc,ele)->acc+ele+"#");
		
		// se io itero con foreach uno stream di dati è come se lo stream venisse svuotato!! RICORDATI!!
		//listaFiltrata.forEach(ele -> System.out.println(ele));
		System.out.println(s);
		
		
		// voglio farmi ritornare una lista! con collectors to list cosi finisco lo stream!
		List<String> listaManipolata=lista1.stream().map(ele->"|"+ele+"|").collect(Collectors.toList());
		
		listaManipolata.forEach(ele->System.out.println(ele));
		
		//POSSO ANCHE FAR TRASFORMARLA IN UN SET! COSI DA PULIRLA DAI VAALORI DUPLICATI!
		
		// posso usare il builder per creare direttamente lo stream generandomi il dato dove mi serve utilizzarlo
		Stream<String> streamBuilder= Stream.<String>builder().add("abc").add("bdc").build();
		
		// mi darà la lunghezza di streambuilder
		long count=streamBuilder.count();
		
		System.out.println("Count String: "+count);
		
		
	}

}
