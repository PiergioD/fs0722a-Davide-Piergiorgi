package com.example.SpringBootProgettoSett.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringBootProgettoSett.models.Dispositivo;
import com.example.SpringBootProgettoSett.repositories.DispositivoDaoRepository;



@Service
public class DispositivoService {

	
	@Autowired
	DispositivoDaoRepository dispRepo;
	
	
	// METODO PER SALVARE UNO USER
		public Dispositivo createDispositivo(Dispositivo disp) {
			
		
			dispRepo.save(disp);
			System.out.println("Dispositivo salvato");
			return disp;
		}
		
		// ritonra una lista di entity user letti dal database
		public List<Dispositivo> getAlldispositivi() {
			return (List<Dispositivo>) dispRepo.findAll();
		}
		
		
		
		public Optional<Dispositivo> getDispositivobyId(Integer id) {
			// se non esiste, ddai errore
			if(!dispRepo.existsById(id)) {
				throw new EntityNotFoundException("Dispositivo inesistente!!"); 
			}
			return dispRepo.findById(id);
		}
		
		
		//Metodo per modificare
		public Dispositivo updateDispositivo(Dispositivo disp) {
			
			
			if(!dispRepo.existsById(disp.getId())) {
				throw new EntityNotFoundException("Dispositivo inesistente!!"); 
			}
			// se esiste faccio update
			dispRepo.save(disp);
			return disp;
		}
		
		// metodo per eliminare 
		public String removeUser(Integer id) {
	        if(!dispRepo.existsById(id)) {
	             throw new EntityNotFoundException("User not exists!!!!");
	        }
	        dispRepo.deleteById(id);
	        return "Dispositivo Eliminato!!!!!";
	    }
	
	
}
