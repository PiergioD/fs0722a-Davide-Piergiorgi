package com.exampleSpringBoot_ex.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.exampleSpringBoot_ex.model.Language;
import com.exampleSpringBoot_ex.services.LanguageService;



@RestController
@RequestMapping("/languages")
public class LanguageController {

	@Autowired LanguageService langServ;
	
	
	@GetMapping
	public ResponseEntity<List<Language>> getAllLanguages(){
		 return new ResponseEntity<List<Language>>(langServ.getAllLanguages(), HttpStatus.OK);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Language> getUserbyId(@PathVariable Long id) {
		return new ResponseEntity<Language>(langServ.getLangbyId(id),HttpStatus.OK);
	}
	
	
	
	// ricevero un dato che ho definitio nell'enity language
	
		@PostMapping
	    public ResponseEntity<Language> createLanguage(@RequestBody Language l) {
			
			
			// lexcetpion mi guarda se il linguaggio esista gia, altrimenti il lainguaggio viene salvaato
			Language lang=langServ.createLang(l);
			// rispondo al client con l'oggetto appena inserito
	        return new ResponseEntity<Language>(lang, HttpStatus.OK);
	    }
		
		
		// il mio put by id
		@PutMapping("/{id}")
	    public ResponseEntity<Language> updateLang(@RequestBody Language lang) {
	        return new ResponseEntity<Language>(langServ.updateLang(lang), HttpStatus.OK);
	    }
		
		// creo il mio delete mapping
		@DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteLang(@PathVariable Long id) {
	        return new ResponseEntity<String>(langServ.removeLangbyId(id), HttpStatus.OK);
	    }
	
}
