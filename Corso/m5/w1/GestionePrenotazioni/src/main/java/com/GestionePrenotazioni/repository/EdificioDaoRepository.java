package com.GestionePrenotazioni.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.models.Edificio;

@Repository
public interface EdificioDaoRepository extends CrudRepository<Edificio, Integer> {

}
