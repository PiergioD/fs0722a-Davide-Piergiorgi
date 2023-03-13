package com.exampleSpringBoot_ex.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;


@ControllerAdvice
public class LingueExceptions extends ResponseEntityExceptionHandler{

	@ExceptionHandler(LinguaException.class)
	public ResponseEntity<String> catchexc(LinguaException e){
		return new ResponseEntity<String>("Lingua Errata", HttpStatus.BAD_REQUEST);
	}
	
	// reposnse entity è una riposta piu completa
		@ExceptionHandler(EntityExistsException.class)
		protected ResponseEntity<String> manageEntityExistsException(EntityExistsException e){
			return new ResponseEntity<String>(e.getMessage()+" MyExceptionHandler",HttpStatus.FOUND);
		}
		
		// questo nell'handler! vai a guardare nel service
		@ExceptionHandler(EntityNotFoundException.class)
	    protected ResponseEntity<String> manageEntityNotFoundException(EntityNotFoundException e){
	        return new ResponseEntity<String>(e.getMessage() + " MyExceptionHandler!", HttpStatus.NOT_FOUND);
	    }
}
