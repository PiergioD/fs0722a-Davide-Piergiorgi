package com.example.ProgSett.model;

import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Table;

import com.example.ProgSett.interfaces.Observer;
import com.example.ProgSett.interfaces.Subject;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class Sonda implements Subject {

	
	
	private Integer id_sonda;
	private Integer latitudine;
	private Integer longitudine;
	private Integer smokeLevel;
	
	private List<Observer> controlli= new ArrayList<>();
	
	
	
	public void SetSmokeLevel(Integer livello){
		smokeLevel=livello;
		if(livello>=5) {
			notifyAllObserver(this.getLatitudine(),this.getLongitudine(),this.getSmokeLevel(),this.getId_sonda());
			System.out.println("Attenzione!Livello di fumo eccessivo! incendio nel punto con long: "+this.longitudine+" , con lat: "+this.latitudine);
		}else {
			System.out.println("Tutto nella norma nel punto con long: "+this.longitudine+" e lat: "+this.latitudine);;
		}
		
	
		
	}
	
	
	
	
	
	@Override
	public void register(Observer o) {
		controlli.add(o);
		
	}
	@Override
	public void unregister(Observer o) {
		controlli.remove(o);
		
	}
	public void notifyAllObserver(Integer lat,Integer longi,Integer smoke,Integer id) {
		try {
			for(Observer controllo: controlli) {			
				controllo.update(lat,longi,smoke,id);				
			}
		} catch (MalformedURLException e) {
			
			e.printStackTrace();
		}
		
	}





	





	






	
	
}
