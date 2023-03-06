package demo.classes;

import org.springframework.beans.factory.annotation.Value;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Box {

	
	// nel caso non è settato, questo è il valora del attributo messo in aplication prorperties
	@Value("${box.x}")
	private int x;
	@Value("${box.y}")
	private int y;
	@Value("${box.name}")
	private String name;
	
	


	public Box(int x, int y, String name) {
		super();
		this.x = x;
		this.y = y;
		this.name = name;
	}


	public Box() {
		// TODO Auto-generated constructor stub
	}


	public int getArea() {
		return x*y;
	}
	
	
	public int getPerimeter() {
		return (x+y)*2;
	}
	
	
	
	
	
	
	
}
