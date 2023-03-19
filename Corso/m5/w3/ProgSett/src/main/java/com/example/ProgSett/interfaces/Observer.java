package com.example.ProgSett.interfaces;

import java.net.MalformedURLException;

public interface Observer {

	public void update(Integer lat,Integer longi,Integer smoke,Integer id)throws MalformedURLException;
	
	
}
