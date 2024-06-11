package com.zosh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zosh.model.User;
import com.zosh.repository.UserRepository;
import com.zosh.service.UserService;

@RestController
public class SupperAdminController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/api/customers")
	public ResponseEntity<List<User>> getAllCustomers() {
		
		List<User> users =userService.findAllUsers();
		
		return new ResponseEntity<>(users,HttpStatus.ACCEPTED);

	}
	
	@GetMapping("/api/pending-customers")
	public ResponseEntity<List<User>> getPenddingRestaurantUser(){
		List<User> users=userService.getPenddingRestaurantOwner();
		return new ResponseEntity<List<User>>(users,HttpStatus.ACCEPTED);
		
	}
}
