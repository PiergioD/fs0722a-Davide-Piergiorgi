package IOFile;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class TestIOMainProject {

	static File file= new File("dirFile/test.txt");
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		try {
			scriviFile("Test di scrittura su File");
			String testoDaFile=leggiFile();
			System.out.println("Testo: "+testoDaFile);
			cancellaFile();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	
	public static void scriviFile(String testo) throws IOException {
		FileUtils.writeStringToFile(file,testo,"UTF-8");
		System.out.println("testo inserito nel file");
	}
	
	
	public static String leggiFile() throws IOException {
		String txtFile=FileUtils.readFileToString(file,"UTF-8");
		return txtFile;
	}
	
	public static void cancellaFile() {
		FileUtils.deleteQuietly(file);
		System.out.println("File eliminato");
	}
	
	public static void cancellaDir() throws IOException{
		File file = new File("dirFile/");
		FileUtils.deleteDirectory(file);
		System.out.println("Directory eliminatoa");
	}
}
