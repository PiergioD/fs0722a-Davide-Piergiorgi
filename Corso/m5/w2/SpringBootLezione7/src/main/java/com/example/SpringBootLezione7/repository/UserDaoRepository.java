package com.example.SpringBootLezione7.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringBootLezione7.models.User;


@Repository
public interface UserDaoRepository extends CrudRepository<User, Long> {

	
	// query personalizzata che miresituisce un valore boolean se il cognome e nome esistono in un oggetto
	public boolean existsByNameAndLastname(String name, String lastname);
		
		
		
	
	
	
}
