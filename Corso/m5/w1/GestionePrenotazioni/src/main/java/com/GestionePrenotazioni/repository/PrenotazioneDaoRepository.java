package com.GestionePrenotazioni.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.models.Prenotazioni;

@Repository
public interface PrenotazioneDaoRepository extends CrudRepository<Prenotazioni, Integer> {

}
