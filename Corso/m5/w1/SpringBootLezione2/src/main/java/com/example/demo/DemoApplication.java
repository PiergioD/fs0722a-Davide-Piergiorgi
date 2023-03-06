package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import demo.classes.Box;
import demo.configurations.ConfigurationBox;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	public static void appBeanBox() {
		ApplicationContext appCtx = new AnnotationConfigApplicationContext(ConfigurationBox.class);
		
		// recuper bean
		
		Box b1 = (Box) appCtx.getBean("box");
		System.out.println(b1.getArea());
		System.out.println(b1.getPerimeter());
		
		
		Box b2 = (Box) appCtx.getBean("boxProp");
		System.out.println(b2.getArea());
		System.out.println(b2.getPerimeter());
		
		((ConfigurableApplicationContext) appCtx).close();
	}
	
}
