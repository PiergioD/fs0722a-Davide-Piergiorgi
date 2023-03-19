package com.example.ProgSett.interfaces;

public interface Subject {

	public void register(Observer o);
	public void unregister(Observer o);
	public void notifyAllObserver(Integer lat,Integer longi, Integer smoke,Integer id);
	
	
}
