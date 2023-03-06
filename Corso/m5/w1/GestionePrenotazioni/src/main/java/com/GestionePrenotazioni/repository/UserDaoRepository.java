package com.GestionePrenotazioni.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.models.User;

@Repository
public interface UserDaoRepository extends CrudRepository<User, String> {

}
