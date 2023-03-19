package com.springMICROSERVIZI_12.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springMICROSERVIZI_12.model.Animal;
import com.springMICROSERVIZI_12.repository.AnimalsRepository;

@RestController
@RequestMapping("/api/be")
public class MicroservizioControllerProducer {
	
	@Autowired AnimalsRepository repo;
	
	@GetMapping("/test")
	public String test() {
		return "BE String Content!!!";
	}
	
	@GetMapping("/string_animals")
	public ResponseEntity<List<Animal>> string_animals() {
		
		List<Animal> animals = repo.findAll();
		
		return new ResponseEntity<List<Animal>>(animals, HttpStatus.OK);
	}

	@GetMapping(value = "/json_animals", 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Animal>> json_animals() {
		
		List<Animal> animals = repo.findAll();
		
		return new ResponseEntity<List<Animal>>(animals, HttpStatus.OK);
	}

}
