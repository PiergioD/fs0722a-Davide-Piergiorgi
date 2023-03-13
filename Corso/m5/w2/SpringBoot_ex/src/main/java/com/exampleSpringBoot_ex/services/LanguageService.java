package com.exampleSpringBoot_ex.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.exampleSpringBoot_ex.model.Language;
import com.exampleSpringBoot_ex.repositories.LanguageDaoRepository;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class LanguageService {

	@Autowired
	LanguageDaoRepository langRepo;

	// METODO PER SALVARE UNO linguaggio
	public Language createLang(Language lang) {
		// vedo se esiste gia il nome e cognome dell'utente che gli passo
		if (langRepo.existsBylingua(lang)) {
			throw new EntityExistsException("This language exists");
		}
		langRepo.save(lang);
		System.out.println("Linguaggio  salvato");
		return lang;
	}

	// METODO PER RECUPERARE UN LINGUAGGIO DALL ID
	public Language getLangbyId(Long id) {
		// se non esiste, ddai errore
		if (!langRepo.existsById(id)) {
			throw new EntityNotFoundException("Language doesn't exist!!");
		}
		return langRepo.findById(id).get();
	}

	// METODO PER MODIFICARE UN LINGUAGGIO
	public Language updateLang(Language lang) {

		if (!langRepo.existsById(lang.getId())) {
			throw new EntityNotFoundException("Language doesn't exist!!");
		}
		// se esiste faccio update
		langRepo.save(lang);
		return lang;
	}

	// METODO PER ELIMINARE UN LINGUAGGIO
	public String removeLangbyId(Long id) {
		if (!langRepo.existsById(id)) {
			throw new EntityNotFoundException("Language not exists!!!!");
		}
		langRepo.deleteById(id);
		return "Language deleted!!!!";
	}
	
	
	// ritonra una lista di entity language letti dal database
		public List<Language> getAllLanguages() {
			return (List<Language>) langRepo.findAll();
		}
	

}
