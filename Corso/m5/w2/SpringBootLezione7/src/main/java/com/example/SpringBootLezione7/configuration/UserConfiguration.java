package com.example.SpringBootLezione7.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.example.SpringBootLezione7.models.User;

@Configuration
public class UserConfiguration {

	
	// voglio crearmi qua un bean che mi resituiscde un admin!
	// con value leggo il valore dentro application properties
	@Value("${admin.name}") private String adminName;
	@Value("${admin.lastname}") private String adminLastName;
	@Value("${admin.city}") private String adminCity;
	
	
	// ladmin deve essere uno soltanto!
	@Bean("AdminUserBean")
	@Scope("singleton")
	public User newAdminUser() {
		User u = new User();
		u.setCity(adminName);
		u.setLastname(adminLastName);
		u.setName(adminCity);
		
		return u;
	}
	
	
}
