package com.SpringBootLezione4.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.SpringBootLezione4.model.User;

@Configuration
public class UserConfiguration {

	@Bean
	@Scope("prototype")
	public User testUser() {
		return new User("mario","rossi","roma",22,"m.rossi@example.com");
	}
	
	
}
