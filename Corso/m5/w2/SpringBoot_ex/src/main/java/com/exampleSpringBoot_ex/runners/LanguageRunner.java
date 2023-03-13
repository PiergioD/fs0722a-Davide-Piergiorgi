package com.exampleSpringBoot_ex.runners;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

import com.exampleSpringBoot_ex.model.Language;
import com.exampleSpringBoot_ex.services.LanguageService;

public class LanguageRunner implements ApplicationRunner {

	@Autowired LanguageService langServ;
	
	
	
	@Autowired
	@Qualifier("ItaLangBean")
	ObjectProvider<Language> itaLang;
	
	
	@Autowired
	@Qualifier("IngLangBean")
	ObjectProvider<Language> ingLang;
	
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		
		
		//get object mi crea un oggetto autowired
//		langServ.createLang(itaLang.getObject());
//		langServ.createLang(ingLang.getObject());
		

	}

}
