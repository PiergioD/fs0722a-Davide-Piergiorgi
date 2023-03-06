package config_bean_configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class ConfigurationTest {
//spring usa le notazione per dire cosa deve fare una classse
	@Bean
	@Scope("singleton")
	public Test test() {
		return new Test("Mario", "Rossi");
		// questo metodo resituisce una istanza della classe test!
	}
	// questo classe mi istanziera dei bean(pojo)
	// IL BEAN è UN SINGLETON, CIOE LA CLASSE HA UNA SOLA ISTANZA!
	// SE LO RICHIAMO IN UNA LTRA VARIABILE! SARA SEMPRE LO STESO OGGETTO
	
	
	

	// con protype bean non è singleton, ma ogni volta la istanza sarà diversa!
	@Bean
	@Scope("prototype")
	public Test test2(String nome, String cognome) {
		return new Test(nome, cognome);
	}
}
