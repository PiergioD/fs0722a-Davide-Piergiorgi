package com.example.SpringBootEsercizio6.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/testo")
public class TestoController {

	
	@GetMapping("/home")
	public String getItaliaPage() {
		return "";
	}
	
	
}
