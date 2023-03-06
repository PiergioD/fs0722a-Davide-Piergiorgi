package com.GestionePrenotazioni.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionePrenotazioni.models.Prenotazioni;
import com.GestionePrenotazioni.repository.PrenotazioneDaoRepository;


@Service
public class PrenotazioneService {

	
	@Autowired PrenotazioneDaoRepository repo;
	
	
	public void insertPrenotazione(Prenotazioni p) {
		repo.save(p);
	}
	
	
	public Prenotazioni getPrenotazioneById(Integer id) {	
		return repo.findById(id).get();
	}
	
	
	public void updatePrenotazioni(Prenotazioni p) {
		repo.save(p);
	}
	
	public void removePrenotazione(Prenotazioni p) {
		repo.delete(p);
	}
	
	public List<Prenotazioni> getAllPrenotazioni() {
		return (List<Prenotazioni>) repo.findAll();
	}
	
//	public List<User> getAgeBetween(Integer min, Integer max) {
//		return repo.findByAgeBetween(min, max);
//	}
}
