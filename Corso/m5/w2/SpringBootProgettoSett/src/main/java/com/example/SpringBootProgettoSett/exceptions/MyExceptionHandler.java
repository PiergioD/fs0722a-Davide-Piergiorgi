package com.example.SpringBootProgettoSett.exceptions;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class MyExceptionHandler extends ResponseEntityExceptionHandler{


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
