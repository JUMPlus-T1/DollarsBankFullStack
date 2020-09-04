package com.cognixia.dollarsbank.repository;

import com.cognixia.dollarsbank.model.Todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
	
}
