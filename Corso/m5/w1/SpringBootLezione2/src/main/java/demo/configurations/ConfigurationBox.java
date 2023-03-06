package demo.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import demo.classes.Box;

@Configuration
public class ConfigurationBox {
// file che nmi srvirea per creare bewan
	
	
	@Bean
	public Box box() {
		return new Box(3,5,"boxBello");
	}
	
	
	
}
