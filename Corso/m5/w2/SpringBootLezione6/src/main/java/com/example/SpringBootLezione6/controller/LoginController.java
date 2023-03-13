package com.example.SpringBootLezione6.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

	//metodo da invocare quando nell uri ce login
	@GetMapping("/login")
    public ModelAndView showFormLogin() {
        ModelAndView model = new ModelAndView("login");
        return model;
    }
		
	
	// richiamo rotta login, il controlloer dsi rende conto utente richiede pagina login, e vedo template login
	// login contiene il form
	// riempiio dei dati
	// clicco su login quando metto dati e faccio submit
	// submit lo spedisce allinterno della rotta /userlog
	// userlog e di tipo post, quindi 
	
//	  @PostMapping("/userlog")
//	    public ModelAndView testLogin( User user ) {
//	        ModelAndView model = new ModelAndView("home");
//	        model.addObject("name", user.getName());
//	        model.addObject("email", user.getEmail());
//	        return model;
//	    }
}
