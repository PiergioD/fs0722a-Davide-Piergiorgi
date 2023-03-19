package com.springMICROSERVIZI_12.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.springMICROSERVIZI_12.model.Animal;
import com.springMICROSERVIZI_12.repository.AnimalsRepository;

@Component
public class AnimalsRunner implements ApplicationRunner {
	
	@Autowired AnimalsRepository repo;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		
		System.out.println("MicroservizioProducer run");
		//setAnimals();

	}
	
	private void setAnimals() {
		Animal a1 = Animal.builder().name("Lassie").city("Roma").age(2).build();
		Animal a2 = Animal.builder().name("Luky").city("Naoli").age(5).build();
		Animal a3 = Animal.builder().name("Pongo").city("Milano").age(3).build();
	
		repo.save(a1);
		repo.save(a2);
		repo.save(a3);
	}

}
