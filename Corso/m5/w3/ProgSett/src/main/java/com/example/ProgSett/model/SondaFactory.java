package com.example.ProgSett.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.ProgSett.interfaces.Observer;


@Component
public class SondaFactory {
	
	private CentroControllo centro;
	
	public SondaFactory() {
		
		this.centro=CentroProxy.GetCentro();
		
	}
	
	public Sonda CreaSonda( Integer id,Integer lat, Integer longi, Integer smoke) {
		List<Observer> list=new ArrayList<Observer>();
		list.add(centro);
		
		Sonda newSonda=new Sonda(id, lat,longi,smoke,list);
		return newSonda;
	}
	

}
