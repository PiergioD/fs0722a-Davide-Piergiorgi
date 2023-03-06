package com.GestionePrenotazioni.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionePrenotazioni.models.Edificio;
import com.GestionePrenotazioni.repository.EdificioDaoRepository;


@Service
public class EdificioService {

	
	@Autowired EdificioDaoRepository repo;
	
	
	public void insertEdificio(Edificio e) {
		repo.save(e);
	}
	
	
	public Edificio getEdificioById(Integer id) {	
		return repo.findById(id).get();
	}
	
	
	
	public void removeEdificio(Edificio e) {
		repo.delete(e);
	}
	
	public List<Edificio> getAllEdificio() {
		return (List<Edificio>) repo.findAll();
	}
	
//	public List<User> getAgeBetween(Integer min, Integer max) {
//		return repo.findByAgeBetween(min, max);
//	}
}
