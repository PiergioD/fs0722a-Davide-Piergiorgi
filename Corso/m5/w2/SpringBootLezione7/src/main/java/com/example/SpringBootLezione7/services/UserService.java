package com.example.SpringBootLezione7.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringBootLezione7.models.User;
import com.example.SpringBootLezione7.repository.UserDaoRepository;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {

	@Autowired UserDaoRepository userRepo;
	
	
	
	// METODO PER SALVARE UNO USER
	public User createUser(User user) {
		// vedo se esiste gia il nome e cognome dell'utente che gli passo
		if(userRepo.existsByNameAndLastname(user.getName(), user.getLastname())) {
			throw new EntityExistsException("User name and lastname exists"); 
		}
		userRepo.save(user);
		System.out.println("Utente salvato");
		return user;
	}
	
	// ritonra una lista di entity user letti dal database
	public List<User> getAllUsers() {
		return (List<User>) userRepo.findAll();
	}
	
	
	// ritorna un user by id
	public User getUserbyId(Long id) {
		// se non esiste, ddai errore
		if(!userRepo.existsById(id)) {
			throw new EntityNotFoundException("User doesn't exist!!"); 
		}
		return userRepo.findById(id).get();
	}
	
	
	//Metodo per modificare
	public User updateUser(User user) {
		
		// l'utente deve esistere per essere modificato!
		if(!userRepo.existsById(user.getId())) {
			throw new EntityNotFoundException("User doesn't exist!!"); 
		}
		// se esiste faccio update
		userRepo.save(user);
		return user;
	}
	
	// metodo per eliminare 
	public String removeUser(Long id) {
        if(!userRepo.existsById(id)) {
             throw new EntityNotFoundException("User not exists!!!!");
        }
        userRepo.deleteById(id);
        return "User deleted!!!!";
    }
	
}
