package com.GestionePrenotazioni.models;

import com.GestionePrenotazioni.enums.TipoPostazione;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table
public class Postazione {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private String description;
	@Column
	@Enumerated(EnumType.STRING)
	private TipoPostazione tipo;
	@Column
	private Integer nMaxOccupanti;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_edificio")
	private Edificio edificio;
	
	// 
	
}
