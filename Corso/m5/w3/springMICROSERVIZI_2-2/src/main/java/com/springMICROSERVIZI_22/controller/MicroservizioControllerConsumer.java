package com.springMICROSERVIZI_22.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class MicroservizioControllerConsumer {
	
	@GetMapping("/test")
	public String test() {
		RestTemplate rt = new RestTemplate();
		String rtUrl = "http://localhost:8082/api/be/test";
		ResponseEntity<String> response = rt.getForEntity(rtUrl, String.class);
		
		return "Core Mcroservizi: " + response.getBody();
	}
	
	@GetMapping("/animals/string")
	public String getAnimals() {
		RestTemplate rt = new RestTemplate();
		String rtUrl = "http://localhost:8082/api/be/string_animals";
		String response = rt.getForObject(rtUrl, String.class);
		
		return "Core Mcroservizi: " + response;
	}
	
	@GetMapping("/animals")
	public Object getJsonAnimals() {
		RestTemplate rt = new RestTemplate();
		String rtUrl = "http://localhost:8082/api/be/json_animals";
		Object response = rt.getForObject(rtUrl, Object.class);
		
		return response;
	}

}
