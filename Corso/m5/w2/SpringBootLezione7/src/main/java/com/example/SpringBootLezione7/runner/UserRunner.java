package com.example.SpringBootLezione7.runner;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.SpringBootLezione7.models.User;
import com.example.SpringBootLezione7.services.UserService;

@Component
public class UserRunner implements ApplicationRunner {

	@Autowired
	UserService userService;
	
	
	// importo il bean che voglio importare
	// faccio l autowired di un singolo bean contenuto in configuration
	// ed ho direttamente l'ogggetto
	@Autowired
	@Qualifier("AdminUserBean")
	ObjectProvider<User> userAdmin;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run...");

		

		// vai a leggere l'oggetto che ti sta restituendo il bean useradmin
		//userService.createUser(userAdmin.getObject());

	}

}
