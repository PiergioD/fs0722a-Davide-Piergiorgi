package com.example.ProgSett.model;

public class CentroProxy {
	private static CentroControllo centro;
	
	public static CentroControllo GetCentro() {
		if(centro==null)
			centro=new CentroControllo();
		return centro;
	}

}
