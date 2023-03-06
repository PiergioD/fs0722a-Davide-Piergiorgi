package com.GestionePrenotazioni.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.GestionePrenotazioni.models.User;
import com.GestionePrenotazioni.repository.UserDaoRepository;

@Component
public class GestioneRunner implements CommandLineRunner {

	@Autowired
	UserDaoRepository userRepo;
	
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Gestione Run...");
		
		User u1= new User("bananInPigiama","Goffredo Postardati","post@banana.it");
		

	}

}
