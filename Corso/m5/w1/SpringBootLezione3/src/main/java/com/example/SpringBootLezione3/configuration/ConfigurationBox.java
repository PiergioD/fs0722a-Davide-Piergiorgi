package com.example.SpringBootLezione3.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.example.SpringBootLezione3.classes.Box;

@Configuration
@PropertySource("classpath:application.properties")
public class ConfigurationBox {

	@Value("${box.x}")
	private int x;
	@Value("${box.y}")
	private int y;
	@Value("${box.name}")
	private String nome;

	@Bean
	public Box boxAppProp() {
		Box b = new Box();
		b.setName(nome);
		b.setX(x);
		b.setY(y);
		return b;
	}

	
	@Bean
	public Box box() {
		return new Box(22,12,"box1");
	}
	
}
