package com.zosh.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.zosh.model.Category;
import com.zosh.model.Food;

public interface foodRepository extends JpaRepository<Food, Long> {

	
	List<Food> findByRestaurantId(Long restaurantId);
	
	@Query("SELECT f FROM Food f WHERE "
			+ "f.name LIKE %:keyword% OR "
			+ "f.foodCategory.name LIKE %:keyword% AND "
			+ "f.restaurant!=null"
	)
	List<Food> searchByNameOrCategory(@Param("keyword") String keyword);


	

}
