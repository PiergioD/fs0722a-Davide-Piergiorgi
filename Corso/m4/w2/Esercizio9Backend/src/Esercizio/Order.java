package Esercizio;

import java.time.LocalDate;
import java.util.List;

public class Order {
private int id;
private String Status;
private LocalDate orderDate;
private LocalDate deliveryDate;
private static List<Product> products;
private static Customer customer;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getStatus() {
	return Status;
}
public void setStatus(String status) {
	Status = status;
}
public LocalDate getOrderDate() {
	return orderDate;
}
public void setOrderDate(LocalDate orderDate) {
	this.orderDate = orderDate;
}
public LocalDate getDeliveryDate() {
	return deliveryDate;
}
public void setDeliveryDate(LocalDate deliveryDate) {
	this.deliveryDate = deliveryDate;
}
public List<Product> getProducts() {
	return products;
}
public void setProducts(List<Product> products) {
	this.products = products;
}
public Customer getCustomer() {
	return customer;
}
public void setCustomer(Customer customer) {
	this.customer = customer;
}
public Order(int id, String status, LocalDate orderDate, LocalDate deliveryDate, List<Product> products,
		Customer customer) {
	super();
	this.id = id;
	this.Status = status;
	this.orderDate = orderDate;
	this.deliveryDate = deliveryDate;
	this.products = products;
	this.customer = customer;
}





}
