package com.SpringBootLezione4.runners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.SpringBootLezione4.model.User;
import com.SpringBootLezione4.service.UserService;

@Component
public class UserRunner implements CommandLineRunner {
	
	@Autowired
	UserService userService;

	@Override
	public void run(String... args) throws Exception {
	System.out.println("UserRun...");

	//userService.insertUser();
	User user = userService.getUserbyId(2l);
	//user.setCity("milano");
	
	//userService.updateUser(user);
	System.out.println(user);
	
	//userService.removeUser(user.getId());
	}

}
