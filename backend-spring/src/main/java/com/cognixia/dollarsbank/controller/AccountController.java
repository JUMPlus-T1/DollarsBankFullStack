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

	@PostMapping("/add-account")
	String registerAccount(@RequestBody Account acct) {
		if(acct.getName() != null && acct.getAddress() != null && acct.getPhone() != null && acct.getEmail() != null && acct.getPassword() != null) {
			Account account = new Account(acct.getName(), acct.getAddress(), acct.getPhone(), acct.getEmail(), acct.getPassword());
            accountRepository.save(account);
            System.out.println("New account created.");
			System.out.println("Number of Accounts: " + accountRepository.count());
			return "true";
        }
		return "false";
	}

	@PostMapping("/deposit")
	String depositAccount(@RequestBody String input) {
		if (input != null) {
			String[] str = input.split("=");
			Long id = Long.parseLong(str[0]);
			double deposit = Double.parseDouble(str[1]);
			if (deposit > 0) {
				Account account = accountRepository.findAccountById(id);
				account.setBalance(account.getBalance() + deposit);
				accountRepository.updateBalanceById(id, account.getBalance());
				account.setHistory(account.getHistory() + "+ $" + deposit + " on " + new java.util.Date() + "|");
				accountRepository.updateHistoryById(id, account.getHistory());
				return account.toString();
			}			
		}
		return null;
	}

	@PostMapping("/withdraw")
	String withdrawAccount(@RequestBody String input) {
		if (input != null) {
			String[] str = input.split("=");
			Long id = Long.parseLong(str[0]);
			double withdraw = Double.parseDouble(str[1]);
			if (withdraw > 0) {
				Account account = accountRepository.findAccountById(id);
				account.setBalance(account.getBalance() - withdraw);
				if (account.getBalance() > 0) {
					accountRepository.updateBalanceById(id, account.getBalance());
					account.setHistory(account.getHistory() + "- $" + withdraw + " on " + new java.util.Date() + "|");
					accountRepository.updateHistoryById(id, account.getHistory());
					return account.toString();
				}				
			}			
		}
		return null;
	}

	@PostMapping("/transfer")
	String transferAccount(@RequestBody String input) {
		if (input != null) {
			String[] str = input.split("=");
			String[] id = str[0].split("to");
			String withdraw = this.withdrawAccount(id[0] + "=" + str[1]);
			if (withdraw != null) {
				String deposit = this.depositAccount(id[1] + "=" + str[1]);
				if (deposit != null)
					return withdraw;
				else {
					String revert = this.depositAccount(id[0] + "=" + str[1]);
					return revert;
				}
			}			
		}
		return null;
	}

}