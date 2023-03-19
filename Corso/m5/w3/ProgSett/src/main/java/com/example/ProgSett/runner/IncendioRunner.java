package com.example.ProgSett.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.ProgSett.model.CentroControllo;
import com.example.ProgSett.model.CentroProxy;
import com.example.ProgSett.model.Sonda;
import com.example.ProgSett.model.SondaFactory;


@Component
public class IncendioRunner implements ApplicationRunner {

	@Autowired SondaFactory sondaFactory;
	
	
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		Sonda a=sondaFactory.CreaSonda(1, 234, 345, 1);
		Sonda b=sondaFactory.CreaSonda(2, 34, 43, 1);
		Sonda c=sondaFactory.CreaSonda(3, 56, 76, 4);
		Sonda d=sondaFactory.CreaSonda(4, 123, 32, 1);
		d.SetSmokeLevel(5);
		
		
		
		
		
		
		
	
	}

	

}
