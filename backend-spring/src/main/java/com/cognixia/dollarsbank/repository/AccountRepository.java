package com.cognixia.dollarsbank.repository;

import javax.transaction.Transactional;

import com.cognixia.dollarsbank.model.Account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
	
	@Query("SELECT a FROM Account a WHERE a.email=?1 AND a.password=?2")
	Account findByEmailPassword(String email, String password);

	@Query("SELECT a FROM Account a WHERE a.id=?1")
	Account findAccountById(Long id);

	@Modifying
	@Transactional
	@Query("UPDATE Account a SET a.balance=?2 WHERE a.id=?1")
	void updateBalanceById(Long id, double balance);

	@Modifying
	@Transactional
	@Query("UPDATE Account a SET a.history=?2 WHERE a.id=?1")
	void updateHistoryById(Long id, String history);

}
