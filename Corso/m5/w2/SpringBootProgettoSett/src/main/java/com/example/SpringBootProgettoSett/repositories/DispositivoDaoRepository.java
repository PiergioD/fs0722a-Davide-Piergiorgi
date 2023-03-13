package com.example.SpringBootProgettoSett.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SpringBootProgettoSett.enums.StatoDispositivi;
import com.example.SpringBootProgettoSett.enums.TipologiaDispositivo;
import com.example.SpringBootProgettoSett.models.Dispositivo;

public interface DispositivoDaoRepository extends CrudRepository<Dispositivo, Integer> {

	Optional<Dispositivo>  findByStato(StatoDispositivi stato);
	Optional<Dispositivo>  findByTipo(TipologiaDispositivo tipo);
	
	
	
}
