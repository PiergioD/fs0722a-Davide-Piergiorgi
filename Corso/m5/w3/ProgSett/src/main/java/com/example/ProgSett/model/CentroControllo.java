package com.example.ProgSett.model;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;



import com.example.ProgSett.interfaces.Observer;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;



@Data
public class CentroControllo implements Observer{

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_centro;
	private String name;
	
	@Override
	public void update(Integer lat,Integer longi,Integer smoke,Integer id) throws MalformedURLException {
		System.out.println("Dati ricevuti dalla sonda! Emergenza chiamata!");
		
		// faccio una chiamatina api 
		String url="http://host/alarm?=idsonda=[id]&lat=[lat]&lon=[longi]&smokelevel=[smoke]";
		
		url=url.replace("[id]",""+id).replace("[lat]",""+lat).replace("[longi]",""+longi).replace("[smoke]",""+smoke);
		
		try {
			URL url1 = new URL(url);
			HttpURLConnection con= (HttpURLConnection) url1.openConnection();
			con.setRequestMethod("GET");
			int status=con.getResponseCode();
			if(status!=200)
				System.out.println("Chiamata non andata a buon fine");
			else
				System.out.println("Chiamata andata a buon fine");
		} catch (IOException e) {
			System.out.println("Chiamata non andata a buon fine");
			
		}
		
		
	}
    

}
