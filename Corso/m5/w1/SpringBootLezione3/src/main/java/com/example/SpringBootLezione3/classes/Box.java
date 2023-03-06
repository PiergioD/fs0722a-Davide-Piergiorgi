package com.example.SpringBootLezione3.classes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
public class Box {

	
	// nel caso non è settato, questo è il valora del attributo messo in aplication prorperties

	private int x;	
	private int y;
	
	
	private String name;





	


	public int getArea() {
		return x*y;
	}
	
	
	public int getPerimeter() {
		return (x+y)*2;
	}
	
}
