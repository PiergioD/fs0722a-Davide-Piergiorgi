package com.example.SpringBootLezione7.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBootLezione7.models.User;
import com.example.SpringBootLezione7.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired UserService usersService;
	
	// nn mi serve indicare il path! ce lho gia in requestmapping
	@GetMapping
	public ResponseEntity<List<User>> getAllUsers(){
		 return new ResponseEntity<List<User>>(usersService.getAllUsers(), HttpStatus.OK);
	}
	
	// mi serve id per recuperare uno specifico utente!
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserbyId(@PathVariable Long id) {
		return new ResponseEntity<User>(usersService.getUserbyId(id),HttpStatus.OK);
	}
	
	
	// ricevero un dato che ho definitio nell'enity user
	@PostMapping
    public ResponseEntity<User> createUser(@RequestBody User u) {
		
		
		// lexcetpion mi guarda se lutente esista gia, altrimenti l'utente viene salvaato
		User user=usersService.createUser(u);
		// rispondo al client con l'oggetto appena inserito
        return new ResponseEntity<User>(u, HttpStatus.OK);
    }
	
	
	// creo il mio put mapping
	@PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        return new ResponseEntity<User>(usersService.updateUser(user), HttpStatus.OK);
    }
	
	// creo il mio delete mapping
	@DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        return new ResponseEntity<String>(usersService.removeUser(id), HttpStatus.OK);
    }
}
