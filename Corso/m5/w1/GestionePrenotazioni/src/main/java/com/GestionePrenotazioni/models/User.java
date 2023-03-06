package com.GestionePrenotazioni.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
public class User {

	@Id
	private String username;
	@Column
	private String nomeCompleto;
	@Column
	private String email;
	
	
}
