package com.zosh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zosh.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
