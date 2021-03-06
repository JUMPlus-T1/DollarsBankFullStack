package com.cognixia.dollarsbank.service;

import com.cognixia.dollarsbank.model.Account;
import com.cognixia.dollarsbank.repository.AccountRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

@Service
public class SampleDataService implements CommandLineRunner {
	private final AccountRepository accountRepository;

	public SampleDataService( AccountRepository accountRepository) {
		this.accountRepository = accountRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		
		//Account Sample Data
		Account account1 = new Account("John Doe","123 Street, Nowhere, USA", "(555) 555 5555", "johndoe@email.com","password");
		accountRepository.save(account1);

		Account account2 = new Account("Jane Doe","123 Street, Nowhere, USA", "(555) 555 5554", "janedoe@email.com","password");
		accountRepository.save(account2);

		System.out.println("Number of Accounts: " + accountRepository.count());
	}
}