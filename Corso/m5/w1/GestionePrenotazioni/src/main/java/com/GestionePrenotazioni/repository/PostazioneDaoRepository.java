package com.GestionePrenotazioni.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.enums.TipoPostazione;
import com.GestionePrenotazioni.models.Postazione;

@Repository
public interface PostazioneDaoRepository extends CrudRepository<Postazione, Integer> {

	
	 public List<Postazione> findByType(TipoPostazione t);

	public List<Postazione> findByTypeAndId(TipoPostazione t,Integer id);
	
	
}
