package com.GestionePrenotazioni.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionePrenotazioni.models.User;
import com.GestionePrenotazioni.repository.UserDaoRepository;


@Service
public class UserService {

	
	@Autowired UserDaoRepository repo;
	
	
	public void insertUser(User user) {
		repo.save(user);
	}
	
	
	public User getUserByUsername(String username) {	
		return repo.findById(username).get();
	}
	
	
	public void updateUser(User user) {
		repo.save(user);
	}
	
	public void removeUser(User user) {
		repo.delete(user);
	}
	
	public List<User> getAllUser() {
		return (List<User>) repo.findAll();
	}
	
//	public List<User> getAgeBetween(Integer min, Integer max) {
//		return repo.findByAgeBetween(min, max);
//	}
}
