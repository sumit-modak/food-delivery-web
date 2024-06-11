package com.zosh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zosh.Exception.RestaurantException;
import com.zosh.Exception.UserException;
import com.zosh.model.Restaurant;
import com.zosh.model.User;
import com.zosh.request.CreateRestaurantRequest;
import com.zosh.response.ApiResponse;
import com.zosh.service.RestaurantService;
import com.zosh.service.UserService;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {
	@Autowired
	private RestaurantService restaurantService;
	
	@Autowired
	private UserService userService;

	@PostMapping()
	public ResponseEntity<Restaurant> createRestaurant(
			@RequestBody CreateRestaurantRequest req,
			@RequestHeader("Authorization") String jwt) throws UserException {

			User user = userService.findUserProfileByJwt(jwt);
		
			System.out.println("----TRUE___-----"+jwt);
			Restaurant restaurant = restaurantService.createRestaurant(req,user);
			return ResponseEntity.ok(restaurant);
	}


	@PutMapping("/{id}")
	public ResponseEntity<Restaurant> updateRestaurant(@PathVariable Long id, @RequestBody CreateRestaurantRequest req,
			@RequestHeader("Authorization") String jwt) throws RestaurantException, UserException {
		User user = userService.findUserProfileByJwt(jwt);
		
			Restaurant restaurant = restaurantService.updateRestaurant(id, req);
			return ResponseEntity.ok(restaurant);
		
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteRestaurantById(@PathVariable("id") Long restaurantId,
			@RequestHeader("Authorization") String jwt) throws RestaurantException, UserException {
		User user = userService.findUserProfileByJwt(jwt);
		
			restaurantService.deleteRestaurant(restaurantId);
			
			ApiResponse res=new ApiResponse("Restaurant Deleted with id Successfully",true);
			return ResponseEntity.ok(res);
	}

	
	@PutMapping("/{id}/status")
	public ResponseEntity<Restaurant> updateStataurantStatus(
			@RequestHeader("Authorization") String jwt,
			@PathVariable Long id) throws RestaurantException, UserException {
		
			Restaurant restaurant = restaurantService.updateRestaurantStatus(id);
			return ResponseEntity.ok(restaurant);

	}

	@GetMapping("/user")
	public ResponseEntity<Restaurant> findRestaurantByUserId(
			@RequestHeader("Authorization") String jwt) throws RestaurantException, UserException {
		User user = userService.findUserProfileByJwt(jwt);
		Restaurant restaurant = restaurantService.getRestaurantsByUserId(user.getId());
		return ResponseEntity.ok(restaurant);

	}
	
	

}
