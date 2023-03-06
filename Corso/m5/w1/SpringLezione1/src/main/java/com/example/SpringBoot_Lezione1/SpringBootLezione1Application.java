package com.example.SpringBoot_Lezione1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import config_bean_component.TestComponent;
import config_bean_configuration.ConfigurationTest;
import config_bean_configuration.Test;
import config_bean_xml.TestXml;

@SpringBootApplication
public class SpringBootLezione1Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootLezione1Application.class, args);
		// qua so gia che java deve avviare una applicazione spring con annotation
		// @springbootapplication
		// questo SARA IL MAIN
		// configWith_Beans();
		// configWithXml();
		configWithComponent();
	}
// CONFIG WITH BEANS
	public static void configWith_Beans() {

		// sfrutta file di config che ha nnotation per lapplication context
		// leggi i file che contengono un anntoation configuration
		// questo file conterra tutte le config dellaplication contenxt
		// questo contenitore sapra dove andare a lavorare
		ApplicationContext appCtx = new AnnotationConfigApplicationContext(ConfigurationTest.class);

		// recuper il bean singleton
		Test t1 = (Test) appCtx.getBean("test");

		System.out.println(t1.saluta());
		// mi ritorna un object generico

		Test t2 = (Test) appCtx.getBean("test");
		// t2.setNome("luigi");
		System.out.println(t2.saluta());

		// creo un bean usando scope prototype
		Test t3 = (Test) appCtx.getBean("test2", "Giusepe", "Verdi");
		System.out.println(t3.saluta());
		
		// chiudi sempre il contenitore"!
		((AnnotationConfigApplicationContext) appCtx).close();

	}
// CONFIG WITH XML
	public static void configWithXml() {
		// usiamo il file xml che deve leggere
		ApplicationContext appCtx = new ClassPathXmlApplicationContext("beans.xml");

		// recuper il bean
		// metto l'id del xml
		TestXml t1 = (TestXml) appCtx.getBean("TestXml");
		System.out.println(t1.saluta());
		((ClassPathXmlApplicationContext) appCtx).close();
		
	}

	
	// CONFIG WITH COMPONENTS
	public static void configWithComponent() {

		ApplicationContext appCtx = new AnnotationConfigApplicationContext();
		
		((AnnotationConfigApplicationContext) appCtx).scan("config_bean_component");
		((AnnotationConfigApplicationContext) appCtx).refresh();

		// recuper il bean

		TestComponent t1 = (TestComponent) appCtx.getBean("TestComponent");
		System.out.println(t1.saluta());
		((AnnotationConfigApplicationContext) appCtx).close();
	}

}
