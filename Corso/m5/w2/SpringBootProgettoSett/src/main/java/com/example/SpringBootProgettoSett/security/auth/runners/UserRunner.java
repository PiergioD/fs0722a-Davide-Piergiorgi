package com.example.SpringBootProgettoSett.security.auth.runners;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.SpringBootProgettoSett.enums.StatoDispositivi;
import com.example.SpringBootProgettoSett.enums.TipologiaDispositivo;
import com.example.SpringBootProgettoSett.models.Dispositivo;
import com.example.SpringBootProgettoSett.repositories.DispositivoDaoRepository;
import com.example.SpringBootProgettoSett.security.auth.roles.ERole;
import com.example.SpringBootProgettoSett.security.auth.roles.Role;
import com.example.SpringBootProgettoSett.security.auth.roles.RoleRepository;
import com.example.SpringBootProgettoSett.security.auth.users.User;
import com.example.SpringBootProgettoSett.security.auth.users.UserRepository;

@Component
public class UserRunner implements ApplicationRunner {
	
	@Autowired RoleRepository roleRepository;
	@Autowired UserRepository userRepository;
	@Autowired PasswordEncoder encoder;
	@Autowired DispositivoDaoRepository dispRepo;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		Role admin = new Role();
		admin.setRoleName(ERole.ROLE_ADMIN);
		//roleRepository.save(admin);
		
		Role user = new Role();
		user.setRoleName(ERole.ROLE_USER);
		//roleRepository.save(user);
		
		Role moderator = new Role();
		moderator.setRoleName(ERole.ROLE_MODERATOR);
		//roleRepository.save(moderator);
		
		Set<Role> adminRole = new HashSet<Role>();
		adminRole.add(admin);
		adminRole.add(moderator);
		adminRole.add(user);
		
		Set<Role> moderatorRole = new HashSet<Role>();
		moderatorRole.add(moderator);
		moderatorRole.add(user);
		
		Set<Role> userRole = new HashSet<Role>();
		userRole.add(user);
		
		User userAdmin = new User();
		userAdmin.setNome("Admino");
		userAdmin.setCognome("Stretor");
		userAdmin.setUsername("admin");
		userAdmin.setEmail("admin@example.com");
		userAdmin.setPassword(encoder.encode("admin"));
		userAdmin.setRoles(adminRole);
		//userRepository.save(userAdmin);
		
		User simpleUser = new User();
		simpleUser.setNome("Mario");
		simpleUser.setCognome("Rossi");
		simpleUser.setUsername("mariorossi");
		simpleUser.setEmail("m.rossi@example.com");
		simpleUser.setPassword(encoder.encode("12345"));
		simpleUser.setRoles(userRole);
		//userRepository.save(simpleUser);
		
		User userModerator = new User();
		userModerator.setNome("Giuseppe");
		userModerator.setCognome("Verdi");
		userModerator.setUsername("giuver");
		userModerator.setEmail("g.verdi@example.com");
		userModerator.setPassword(encoder.encode("qwerty"));
		userModerator.setRoles(moderatorRole);
		//userRepository.save(userModerator);
		
		
		Dispositivo phone = new Dispositivo();
		phone.setName("cellulare bello");
		phone.setTipo(TipologiaDispositivo.Smartphone);
		phone.setStato(StatoDispositivi.Assegnato);
		//dispRepo.save(phone);
		
		
		Dispositivo laptop = new Dispositivo();
		phone.setName("laptop bello");
		phone.setTipo(TipologiaDispositivo.Laptop);
		phone.setStato(StatoDispositivi.Dismesso);
		//dispRepo.save(laptop);
		
		
		Dispositivo tablet = new Dispositivo();
		phone.setName("tablet bello");
		phone.setTipo(TipologiaDispositivo.Tablet);
		phone.setStato(StatoDispositivi.inManutenzione);
		//dispRepo.save(tablet);
		
		
		
		List<Dispositivo> userDispositivi = new ArrayList<Dispositivo>();
		userDispositivi.add(laptop);
		userDispositivi.add(tablet);
		
		List<Dispositivo> adminDispositivi = new ArrayList<Dispositivo>();
		adminDispositivi.add(phone);
		
	}

}
