package com.exampleSpringBoot_ex.configurations;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.exampleSpringBoot_ex.model.Language;


@Configuration
public class LanguageConfiguration {

	
	@Value("${gestionePrenotazioni.linguaIng}")
	private String linguaInglese;
	@Value("${gestionePrenotazioni.linguaIta}")
	private String linguaItaliano;
	@Value("${gestionePrenotazioni.istruzioniItaliano}")
	private String testoIta;
	@Value("${gestionePrenotazioni.istruzioniInglese}")
	private String testoIng;
	
	
	@Bean("ItaLangBean")
	@Scope("prototype")
	public Language linguaIta() {
		Language ita= new Language();
		ita.setLingua(linguaItaliano);
		ita.setTesto(testoIta);
		return ita;
		
	}
	
	
	@Bean("IngLangBean")
	@Scope("prototype")
	public Language linguaIng() {
		Language ing= new Language();
		ing.setLingua(linguaInglese);
		ing.setTesto(testoIng);
		return ing;
		
	}
	
	
}
