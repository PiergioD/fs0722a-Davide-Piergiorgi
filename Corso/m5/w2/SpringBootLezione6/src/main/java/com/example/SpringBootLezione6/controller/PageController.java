package com.example.SpringBootLezione6.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


// con questa annotazione posso omettere responsebody restcontroller solo per le restful
@Controller
@RequestMapping("/api")
public class PageController {

	// identifica il metodo che io andro ad invocare URI, E RESITURIRA QUESTA STRINGA 
	// questo metodo lo invoca in una richiesta di tipo get(lettura)
	// RESPONSEBODY è LA RIPOSTA DA PARTE DEL SERVER, IL CLINET FA RICHIESTA E LI FACCIO UNA RISPOSTA
	@GetMapping("/homepage")
	public @ResponseBody String getHomePage() {
		return "Prima pagina SPring Web MVC";
	}
	
	
	@GetMapping("/ciao")
	public @ResponseBody String getCiaoPage() {
		return "Seconda pagina SPring Web MVC";
	}
	
	// wquando verra invocato questo endpoint verra inovcato questo parametro name
	@GetMapping("/test")
	public @ResponseBody String getTestParams1Page(@RequestParam String name, @RequestParam String lastname,@RequestParam(required =false) String age) {
		if(age!=null) {return "Test Parameter: "+name+ " "+lastname+" "+age;
			//http://localhost:8080/api/test?name=Mario&lastname=Rossi
		}else {
			return "Test Parameter: "+name+ " "+lastname;
		}
	}
	
	@GetMapping("/test2/{name}/{lastname}")
	public @ResponseBody String getTestParams2Page(@PathVariable String name,@PathVariable String lastname) {
		 return "Test Parameter: "+name+ " "+lastname;
			//http://localhost:8080/api/test2/Mario/rossi
		
	}
	
	
	//NON VA PERCHE BOH
	@GetMapping("/test3/{name}/{lastname}")
	public  String getTestThymleaf(Map<String,Object>model,@PathVariable String name,@PathVariable String lastname) {
		// passo un param nell url, che lo prendo nel metodo col pathmvariabile, creo una mappa e metto nella mappa il valore e 
		// e ci assegno un valore(chiave->valore)
		model.put("testName", name); 
		model.put("testLastname", lastname); 
		return "/src/main/resources/templates/test";
		 
			
	}
	
	
	@GetMapping("/test4/{name}/{lastname}")
	public  String getTestThymleafDue(Model model,@PathVariable String name,@PathVariable String lastname) {
		model.addAttribute("testName",name);
		// puoi anche utilizzaere il model per metterci dentro attributi e fare lo stesso test3
		model.addAttribute("testLastName",lastname);
		return "/src/main/resources/templates/test";
		 
			
	}
	
	
	@GetMapping("/test5/{name}/{lastname}")
	public  ModelAndView getTestThymleafTre(@PathVariable String name,@PathVariable String lastname) {
		ModelAndView model= new ModelAndView("test");
		// wrappo la pagina html coi parametri, ma sto facendo la stessera cosa di test4 e test 3
		model.addObject("testName",name);
		model.addObject("testLastName", lastname);
		return model;
		 
			
	}
	
	
	@GetMapping("/contact")
	public @ResponseBody String getContactPage() {
		return "Quarta pagina SPring Web MVC";
	}
	
	//il dispatcher prende la richiesta e la passa all controller che verifica il mapping e cercca i metodi 
}
