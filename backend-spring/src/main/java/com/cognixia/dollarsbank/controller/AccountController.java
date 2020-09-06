package com.cognixia.dollarsbank.controller;

import com.cognixia.dollarsbank.repository.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class AccountController {
	
	@Autowired
	private AccountRepository accountRepository;

	@PostMapping("/login")
	String postLogin() {
		//accountRepository.findByEmailPassword(email, password)
		return "response"; //TODO
	}
}