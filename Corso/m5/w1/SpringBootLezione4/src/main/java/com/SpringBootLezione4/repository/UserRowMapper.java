package com.SpringBootLezione4.repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.SpringBootLezione4.model.User;

public class UserRowMapper implements RowMapper<User> {

	@Override
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		
		User user= new User();
		
// setta id prendendo dalla tabella id	
		user.setId(rs.getLong("id"));
		user.setName(rs.getString("name"));
		user.setLastname(rs.getString("lastname"));
		user.setCity(rs.getString("city"));
		user.setAge(rs.getInt("age"));
		user.setEmail(rs.getString("email"));
		
		return user;
	}

	

}
