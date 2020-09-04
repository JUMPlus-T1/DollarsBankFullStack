package com.cognixia.dollarsbank.service;

import java.util.ArrayList;
import java.util.List;

import com.cognixia.dollarsbank.model.Todo;
import com.cognixia.dollarsbank.repository.TodoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

@Service
public class SampleDataService implements CommandLineRunner {
	private final TodoRepository todoRepository;

	public SampleDataService(TodoRepository todoRepository) {
		this.todoRepository = todoRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		List<Todo> todoList = new ArrayList<Todo>();

		for (int i = 1; i <= 5; i++)
			todoList.add(new Todo("This is todo #" + i));

		todoRepository.saveAll(todoList);

		System.out.println("Number of Todos: " + todoRepository.count());
	}
}