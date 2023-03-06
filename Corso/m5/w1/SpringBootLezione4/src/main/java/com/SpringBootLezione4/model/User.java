package com.SpringBootLezione4.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// builder permetteva di istanziare un oggetto passando i parametri concatenati
// con data mi scrive tutto, trane i costruttori
// questa clase per mappare la miatabella dal database
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
	
	private Long id;
	private String name;
	private String lastname;
	private String city;
	private Integer age;
	private String email;
	
	// questa classe avra 3 costruttori, uno con niente,uno con tutto, e uno con tutto senza ids
	public User(String name, String lastname, String city, Integer age, String email) {
		super();
		this.name = name;
		this.lastname = lastname;
		this.city = city;
		this.age = age;
		this.email = email;
	}
	
	

}
