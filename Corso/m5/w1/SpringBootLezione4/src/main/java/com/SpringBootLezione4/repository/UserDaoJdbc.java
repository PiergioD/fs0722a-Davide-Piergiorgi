package com.SpringBootLezione4.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.SpringBootLezione4.model.User;

@Component
public class UserDaoJdbc implements UserDaoRepository {

	// instanza in manierra automatica degli oggetti
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public void createUser(User user) {
		String sql = "INSERT INTO users (name, lastname, city, age, email) " + "VALUES (?,?,?,?,?)";
		// fai l'update di questa query con i seguenti valori(VANNO IN ORDINE!)
		jdbcTemplate.update(sql, user.getName(), user.getLastname(), user.getCity(), user.getAge(), user.getEmail());
		System.out.println("Utente creato!");
	}

	@Override
	public void updateUser(User user) {
		String sql = "UPDATE users SET name=?, lastname=?, city=?, age=?, email=? WHERE id=?";

		jdbcTemplate.update(sql, user.getName(), user.getLastname(), user.getCity(), user.getAge(), user.getEmail(),
				user.getId());

		
		System.out.println(user.getName()+ " "+user.getLastname()+ " Modificato");
	}

	@Override
	public void removeUser(Long id) {
		String sql = "DELETE FROM users WHERE id=?";
		jdbcTemplate.update(sql, id);
		
		System.out.println("Utente eliminato!");
	}

	@Override
	public User getUserById(Long id) {
		String sql = "SELECT * FROM users WHERE id=?";
		// questo metodo fa query al data base e miriorna oggetto di tupio utente
		User user=jdbcTemplate.queryForObject(sql, new UserRowMapper(),id);
		return user;
	}

	@Override
	public List<User> getAllUsers() {
		String sql = "SELECT * FROM users";
		// voglio farmi ritonrare tutti idati non solo object
		List<User> usersList = jdbcTemplate.query(sql, new UserRowMapper());
		return usersList;
	}

}
