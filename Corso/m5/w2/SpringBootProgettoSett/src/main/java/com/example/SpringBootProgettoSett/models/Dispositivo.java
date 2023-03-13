package com.example.SpringBootProgettoSett.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.SpringBootProgettoSett.enums.StatoDispositivi;
import com.example.SpringBootProgettoSett.enums.TipologiaDispositivo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Table(name = "dispositivi")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Dispositivo {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="nome_dispositivo")
	private String name;
	
	@Column(name="tipo_dispositivo")
	private TipologiaDispositivo tipo;
	
	
	@Column(name="stato_dispositivo")
	private StatoDispositivi stato;
	
	
	
	
}
