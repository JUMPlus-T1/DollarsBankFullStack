package com.cognixia.dollarsbank.controller;

import java.util.List;

import com.cognixia.dollarsbank.model.Todo;
import com.cognixia.dollarsbank.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class TodoController {

	@Autowired
	private TodoRepository todoRepository;

	@GetMapping("todos")
	public List <Todo> getTodos() {
		return this.todoRepository.findAll();
	}
}
