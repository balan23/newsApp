/**
 * 
 */
package com.stackroute.newsapp;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.stackroute.newsapp.controller.NewsAuthController;
import com.stackroute.newsapp.entity.User;
import com.stackroute.newsapp.service.UserService;

/**
 * @author Manobalan A
 *
 */
@RunWith(SpringRunner.class)
@WebMvcTest(NewsAuthController.class)
public class NewsAuthControllerTests {
	
	@Autowired
	private transient MockMvc mvc;
	
	@MockBean
	private transient UserService service;
	private transient User user;

	
	@Before
	public void setup() {
		user = new User();
		user.setFirtName("Fname");
		user.setLastName("Lname");
		user.setPassword("password");
		user.setUserid("Admin");
		
	}
	
	@Test
	public void saveUserTest() {
		
	}
}
