package Esercizio2;


public class esercizio2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int min=0;
int max=5;

// metodino per creare un numero casuale tra 0 e 5
int randomNumber=(int)Math.floor(Math.random() * (max - min + 1) + min);
		
		System.out.println(randomNumber);
		
		switch(randomNumber) {
		case 0:
			System.out.println("Il numero: "+randomNumber+ " è compreso tra 0 e 3");
		break;
		case 1:
			System.out.println("Il numero: "+randomNumber+ " è compreso tra 0 e 3");
		break;
		case 2:
			System.out.println("Il numero: "+randomNumber+ " è compreso tra 0 e 3");
		break;
		case 3:
			System.out.println("Il numero: "+randomNumber+ " è compreso tra 0 e 3");
		break;
		default:
			System.out.println("Il numero: "+randomNumber+ " NON è compreso tra 0 e 3");
		}

	}

}
