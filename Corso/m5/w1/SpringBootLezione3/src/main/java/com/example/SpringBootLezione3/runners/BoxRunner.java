package com.example.SpringBootLezione3.runners;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

import com.example.SpringBootLezione3.classes.Box;
import com.example.SpringBootLezione3.configuration.ConfigurationBox;

// uesta annotation per il runner
@Component
public class BoxRunner implements CommandLineRunner{

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Run...");
		ApplicationContext appCtx = new AnnotationConfigApplicationContext(ConfigurationBox.class);
		
		
		
		Box b1 = (Box) appCtx.getBean("box");
		System.out.println(b1.getArea());
		System.out.println(b1.getPerimeter());
		
		
		((AnnotationConfigApplicationContext) appCtx).close();
		
		
		
	}

}
