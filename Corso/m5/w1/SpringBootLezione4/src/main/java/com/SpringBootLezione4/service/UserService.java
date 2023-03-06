package com.SpringBootLezione4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBootLezione4.model.User;
import com.SpringBootLezione4.repository.UserDaoJdbc;

//IL SERVICE UTILIZZERA IL CRUD DEL DAO JDBC
@Service
public class UserService {

	//istanzio velocemente un oggetto di tipologia daojdbc user
	@Autowired
	UserDaoJdbc jdbc;
	
	
	public User createTestUser() {
		
		// creo oggetto usando il builder(ma posso anche crearlo utilizzando il istanziamento normale o utilizzando i metodi set)
		User u = User.builder().name("Mario").lastname("ROssi").city("Roma").age(22).email("m.rossi@example.com").build();
	
		
		return u;
	
	}
	
	public void insertUser() {
		jdbc.createUser(createTestUser());
	}
	
	
	public User getUserbyId(Long id) {
	return 	jdbc.getUserById(id);
		
	}
	
	
	public void updateUser(User user) {
		 jdbc.updateUser(user);
	}
	
	
	public void removeUser(Long id) {
		jdbc.removeUser(id);
		
	}
}
