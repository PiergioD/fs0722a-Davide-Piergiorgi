package ProgettoSettimanale;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.io.File;
import org.apache.commons.io.FileUtils;

public class LibreriaMainProject {

	// lista in cui aggiungerò tutti gli oggetti di tipologia cartaceo(rivista e
	// libri)
	static List<Cartaceo> arr = new ArrayList<Cartaceo>();

	// locazione del testo
	static File fileLibro = new File("dirFile/text.txt");
	static File fileRivista = new File("dirFile/text1.txt");

	public static void main(String[] args) throws IOException {

		// creazione di istanze di riviste e libri
		Libro libro1 = new Libro(1, "BananaInPigiama", 1998, 324, "eleuterio coppa di rame", "Allegro");
		Libro libro2 = new Libro(2, "FamigliaBarbapapa", 2000, 500, "mariuriello postardati", "Famiglie");
		Libro libro3 = new Libro(3, "AntaniComeSePiovesse", 2004, 705, "antani egidio confermato", "Satirico");
		Rivista rivista1 = new Rivista(4, "ComeNonFareHarakiriProgrammando", 2023, 20, Periodi.SETTIMANALE);
		Rivista rivista2 = new Rivista(5, "Java,Divertimento per tutta la famiglia!", 2022, 23, Periodi.SEMESTRALE);
		Rivista rivista3 = new Rivista(6, "ComeNonCapireilCodiceMaFarloFunzionareComunque", 2021, 21, Periodi.MENSILE);

		// richiamo i metodi nel main
		aggiungiElemento(libro1);
		aggiungiElemento(libro2);
		aggiungiElemento(libro3);
		aggiungiElemento(rivista1);
		aggiungiElemento(rivista2);
		aggiungiElemento(rivista3);

		// filtro l'array di cartaceo per crearmi due array divisi dalla tipologia di
		// classe

		List<Libro> listaLibri = arr.stream().filter(ele -> ele instanceof Libro).map(ele -> (Libro) ele)
				.collect(Collectors.toList());
		List<Rivista> listaRiviste = arr.stream().filter(ele -> ele instanceof Rivista).map(ele -> (Rivista) ele)
				.collect(Collectors.toList());

		// eliminaPerId(7);
		ricercaTramiteId(3);
		ricercaTramiteAnno(2004);
		ricercaTramiteAutore("eleuterio coppa di rame");
		scriviListanelFileLibri(listaLibri);
		scriviListanelFileRiviste(listaRiviste);
		 leggiFile(listaLibri,listaRiviste);

		// Stampo in console tutti gli elementi che ho messo nela lista
		System.out.println("Lunghezza lista cartacei: " + arr.size());
		arr.forEach(ele -> System.out.println("Titolo: " + ele.titolo + " Anno Pubblicazione: " + ele.annoPub + "#"));
		System.out.println("Lunghezza lista libri: " + listaLibri.size());
		System.out.println("Lunghezza lista riviste: " + listaRiviste.size());
		System.out.println("Lista libri");
		listaLibri.forEach(
				ele -> System.out.println("Titolo: " + ele.titolo + " Anno Pubblicazione: " + ele.annoPub + "#"));
		System.out.println("Lista riviste");
		listaRiviste.forEach(
				ele -> System.out.println("Titolo: " + ele.titolo + " Anno Pubblicazione: " + ele.annoPub + "#"));
	}

	// metodo per aggiungere istanze dentro la lista
	public static boolean aggiungiElemento(Cartaceo obj) {
		return arr.add(obj);
	}

	// metodo per elimnare istanze dentro la lista!
	public static void eliminaPerId(Integer id) {
		arr.removeIf(e -> e.iSBN.equals(id));
		System.out.println("Elemento con iSBN: " + id + " eliminato");

	}

	// metodo per cercare tramite isbn
	public static Cartaceo ricercaTramiteId(Integer id) {
		Cartaceo eleFiltrato = arr.stream().filter(ele -> ele.iSBN == id).findFirst().orElse(null);
		if (null == eleFiltrato) {
			System.out.println("Nessun Cartaceo con Isbn; " + id);
		}
		System.out.println("Elemento ricercato con Id: " + id + " è uguale a-> titolo: " + eleFiltrato.titolo);
		return eleFiltrato;
	}

	// NullPointerException
	// metodo per cercare tramite anno
	public static void ricercaTramiteAnno(Integer anno) {
		try {
			Cartaceo eleFiltrato = arr.stream().filter(ele -> ele.annoPub.equals(anno)).findFirst().orElse(null);
			if (null == eleFiltrato) {
				System.out.println("Nessun Cartaceo con Anno di pubblicazione: " + anno);
			}
			System.out.println("Elemento ricercato con Anno Pubblicazione: " + anno + " è uguale a-> titolo: "
					+ eleFiltrato.titolo);
		} catch (NullPointerException e) {
			System.out.print(e.getMessage());
		}
	}

	// metodo per cercare tramite autore
	public static Libro ricercaTramiteAutore(String autore) {
		List<Libro> listFiltrata = arr.stream().filter(ele -> ele instanceof Libro).map(ele -> (Libro) ele)
				.collect(Collectors.toList());
		Libro ricercatoPerAutore = listFiltrata.stream().filter(ele -> ele.autore.equals(autore)).findFirst()
				.orElse(null);
		if (null == ricercatoPerAutore) {
			System.out.println("Nessun Libro trovato  con Autore: " + autore);

		}
		System.out.println(
				"Elemento ricercato con autore: " + autore + " è uguale a titolo: " + ricercatoPerAutore.titolo);
		return ricercatoPerAutore;
	}

	// metodo per scrivere nel file la lista dei libri
	public static void scriviListanelFileLibri(List<Libro> arr1) throws IOException {
		/*
		 * StringBuilder scriviNelFile = new StringBuilder("");
		 * 
		 * for (int i = 0; i < listaLibri.size(); i++) {
		 * scriviNelFile.append(listaLibri.get(i).toString() + System.lineSeparator());
		 * } String str = scriviNelFile.toString();
		 * FileUtils.writeStringToFile(fileLibro, str, "UTF-8", true);
		 * System.out.println("elementi Libro inseriti nel file");}
		 */

		String elementoText = "";
		for (Libro ele : arr1) {
			elementoText += ("Titolo: " + ele.titolo + "@Anno pubblicazione: " + ele.annoPub + "@Codice ISBN: "
					+ ele.iSBN + "@autore: " + ele.autore + "@genere: " + ele.genere + "@N. Pagine: " + ele.pageNumber
					+ "#");
		}
		FileUtils.writeStringToFile(fileLibro, elementoText, "UTF-8");
		System.out.println("elementi Libro inseriti nel file");
	}

// metodo per scrivere in un altro file la lista delle riviste	
	public static void scriviListanelFileRiviste(List<Rivista> arr2) throws IOException {
		String elementoText1 = "";
		for (Rivista ele : arr2) {
			elementoText1 += ("Titolo: " + ele.titolo + "@Anno pubblicazione: " + ele.annoPub + "@Codice ISBN: "
					+ ele.iSBN + "@Periodicità: " + ele.periodicita + "@N. Pagine: " + ele.pageNumber + "#");
		}
		FileUtils.writeStringToFile(fileRivista, elementoText1, "UTF-8");
		System.out.println("elementi Rivista inseriti nel file");
	}

	// metodo per legger il file
	// bug perche non riesce a leggere l'annno e chissa cosaltro
	public static void leggiFile(List<Libro> listaLibri, List<Rivista> listaRiviste) throws IOException {
		// System.out.println(FileUtils.readFileToString(fileLibro, "UTF-8"));
		listaLibri.clear();
		listaRiviste.clear();

		String titolo;
		int annoPub;
		int iSBN;
		Periodi periodicita;
		String autore;
		String genere;
		int pageNumber;

		String libriTxt = FileUtils.readFileToString(fileLibro, "UTF-8");
		String rivisteTxt = FileUtils.readFileToString(fileRivista, "UTF-8");

		String[] objBookTxt = libriTxt.split("#");
		String[] objRivisteTxt = rivisteTxt.split("#");
		for (String obj : objBookTxt) {
			String[] PresBookTxt = obj.split("@");
			titolo = PresBookTxt[0];
			annoPub = Integer.parseInt(PresBookTxt[1]);
			iSBN = Integer.parseInt(PresBookTxt[2]);
			autore = PresBookTxt[3];
			genere = PresBookTxt[4];
			pageNumber = Integer.parseInt(PresBookTxt[5]);

			Libro libro = new Libro(iSBN, titolo, annoPub, pageNumber, autore, genere);
			listaLibri.add(libro);
		}

		for (String obj : objRivisteTxt) {
			String[] PresRivisteTxt = obj.split("@");
			titolo = PresRivisteTxt[0];
			annoPub = Integer.parseInt(PresRivisteTxt[1]);
			iSBN = Integer.parseInt(PresRivisteTxt[2]);
			periodicita = Periodi.valueOf(PresRivisteTxt[3]);
			pageNumber = Integer.parseInt(PresRivisteTxt[4]);
			Rivista rivista = new Rivista(iSBN, titolo, annoPub, pageNumber, periodicita);
			listaRiviste.add(rivista);
		}
	}
}
