package com.example.microEsercizio.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.microEsercizio.model.Persona;

@RestController
@RequestMapping("/api/be")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PersonaController {

	
	// ritorno un json di persone(endpoint produrrra questo risultato)
	
	@GetMapping(value="/persone",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Persona>> listaPersona(){
		
		List<Persona> persone= new ArrayList<>();
				
				persone.add(Persona.builder().name("BrunoLiegiBastonliegi").city("Poggibonsi").age(33).build());
				persone.add(Persona.builder().name("RiccardinoFuffolo").city("Castellamare").age(32).build());
	
		
		
		return new ResponseEntity<List<Persona>>(persone,HttpStatus.OK);
	}
	
	
	
	
}
