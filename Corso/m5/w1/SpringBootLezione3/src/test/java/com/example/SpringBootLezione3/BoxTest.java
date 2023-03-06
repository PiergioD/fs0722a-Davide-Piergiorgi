package com.example.SpringBootLezione3;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.example.SpringBootLezione3.classes.Box;

public class BoxTest {
	
	static Box b;
	
	// prima ancora della class
	@BeforeClass
	public void beforeClassTest() {
		System.out.println("Before class test");
	}
	
	
	@Before
	public static void beforeTest() {
		// il before mi facio le istruzioni iniziali,senza ripetere codice
		b = new Box(20,10,"boxTest");
		System.out.println("Before");
	}
	

	@Test
	public void testGetArea() {
		//Box b = new Box(20,10,"boxTest");
		// primo paramtreo il il risualtato del test, il secondo parametro il metodo che deve essere compararto
		assertEquals(200,b.getArea());
		System.out.println("testa area");
	}

	
	@Test
	public void testGetPerimetro() {
		//Box b = new Box(20,10,"boxTest");
		// primo paramtreo il il risualtato del test, il secondo parametro il metodo che deve essere compararto
		assertEquals(60,b.getPerimeter());
		System.out.println("test perimeter");
	}
}
