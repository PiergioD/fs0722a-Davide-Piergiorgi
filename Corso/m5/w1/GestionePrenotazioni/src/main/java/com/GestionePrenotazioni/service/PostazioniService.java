package com.GestionePrenotazioni.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionePrenotazioni.enums.TipoPostazione;
import com.GestionePrenotazioni.models.Postazione;
import com.GestionePrenotazioni.repository.PostazioneDaoRepository;


@Service
public class PostazioniService {

	
	@Autowired PostazioneDaoRepository repo;
	
	
	public void insertPostazione(Postazione p) {
		repo.save(p);
	}
	
	
	public Postazione getPostazioneById(Integer id) {	
		return repo.findById(id).get();
	}
	
	public List<Postazione> getPostazioniByType(TipoPostazione t) {	
		return repo.findByType(t);
	}
	
	public List<Postazione> getPostazioniByTypeAndId(TipoPostazione t,Integer id) {	
		return repo.findByTypeAndId(t,id);
	}
	
	public void updatePostazione(Postazione p) {
		repo.save(p);
	}
	
	public void removePostazione(Postazione p) {
		repo.delete(p);
	}
	
	public List<Postazione> getAllPostazione() {
		return (List<Postazione>) repo.findAll();
	}
	
//	public List<User> getAgeBetween(Integer min, Integer max) {
//		return repo.findByAgeBetween(min, max);
//	}
}
