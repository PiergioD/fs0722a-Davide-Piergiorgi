package com.SpringBootLezione4.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.SpringBootLezione4.model.User;

@Repository
public interface UserDaoRepository {
// metto le dichiarazioni dei metodi
	
	public void createUser(User user);
	public void updateUser(User user);
	public void removeUser(Long id);
	public User getUserById(Long id);
	public List<User> getAllUsers();
	
}
