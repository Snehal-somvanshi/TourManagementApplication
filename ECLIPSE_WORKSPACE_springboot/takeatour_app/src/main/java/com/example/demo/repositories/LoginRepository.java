package com.example.demo.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Transactional
@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
	// for checking login 
	@Query("select l from Login l where uid = :uid and pwd = :pwd")
	public Optional<Login> getLogin(String uid, String pwd);
	
	
	// updated password after forget password
	@Modifying
	@Query("update Login l set l.pwd=:newpwd where uid = :uid")
	public int UpdatePasswordiInLogin(String newpwd,String uid);
	


	//forget password for employee and tourist
	@Query("select l from Login l where uid = :uid")
	public Optional<Login> getLoginforforgetpwd(String uid);

		

}