package com.cognixia.dollarsbank.service;

import java.util.ArrayList;
import java.util.List;

import com.cognixia.dollarsbank.model.Account;
import com.cognixia.dollarsbank.model.Todo;
import com.cognixia.dollarsbank.repository.AccountRepository;
import com.cognixia.dollarsbank.repository.TodoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

@Service
public class SampleDataService implements CommandLineRunner {
	private final TodoRepository todoRepository;
	private final AccountRepository accountRepository;

	public SampleDataService(TodoRepository todoRepository, AccountRepository accountRepository) {
		this.todoRepository = todoRepository;
		this.accountRepository = accountRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		
		//TODOs sample data
		List<Todo> todoList = new ArrayList<Todo>();

		for (int i = 1; i <= 5; i++)
			todoList.add(new Todo("This is todo #" + i));

		todoRepository.saveAll(todoList);

		System.out.println("Number of Todos: " + todoRepository.count());

		//Account Sample Data
		Account account1 = new Account("John Doe","123 Street, Nowhere, USA", "(555) 555 5555", "johndoe@email.com","password");
		accountRepository.save(account1);

		Account account2 = new Account("Jane Doe","123 Street, Nowhere, USA", "(555) 555 5554", "janedoe@email.com","password");
		accountRepository.save(account2);

		System.out.println("Number of Accounts: " + accountRepository.count());
	}
}