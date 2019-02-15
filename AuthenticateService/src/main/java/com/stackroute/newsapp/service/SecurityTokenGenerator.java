package com.stackroute.newsapp.service;

import java.util.Map;

import com.stackroute.newsapp.entity.User;

/**
 * @author Manobalan A
 *
 */
public interface SecurityTokenGenerator {

	/**
	 * @param user
	 * @return
	 */
	Map<String,String> generateToken(User user);
}