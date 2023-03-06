package com.GestionePrenotazioni.models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table
@Data
@Entity
@Builder
public class Prenotazioni {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private LocalDate data;
	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name="id_utente")
	private User utente;
	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name="id_postazione")
	private Postazione postazione;
}
