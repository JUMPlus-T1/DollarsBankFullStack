package com.cognixia.dollarsbank.controller;

import com.cognixia.dollarsbank.model.Account;
import com.cognixia.dollarsbank.repository.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class AccountController {
	
	@Autowired
	private AccountRepository accountRepository;
	
	@PostMapping("/account")
	String loginAccount(@RequestBody Account acct) {
		Account account = accountRepository.findByEmailPassword(acct.getEmail(), acct.getPassword());

		if (account == null)
			return null;

		return account.toString();
	}

	// @PostMapping("/add-account")
	// String registerAccount(@RequestBody Account acct) {
		
	// 	//TODO

	// 	if (account == null)
	// 		return null;

	// 	return account.toString();
	// }

}