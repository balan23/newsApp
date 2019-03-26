/**
 * 
 */
package com.stackroute.newsapp;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.newsapp.controller.NewsAuthController;
import com.stackroute.newsapp.entity.User;
import com.stackroute.newsapp.service.UserService;

/**
 * @author Manobalan A 
 * Test class for Auth controller
 */
@RunWith(SpringRunner.class)
@WebMvcTest(NewsAuthController.class)
public class NewsAuthControllerTests {
	
	@Autowired
	private transient MockMvc mvc;
	
	@MockBean
	private transient UserService service;
	@Mock
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
    public void testRegisterUser() throws Exception {
        Mockito.when(service.saveUser(user)).thenReturn(true);
        mvc.perform(post("/api/userservice/register").contentType(MediaType.APPLICATION_JSON).content(jsonToString(user)))
                .andExpect(status().isCreated());

    }
	
    @Test
    public void testLoginUser() throws Exception {
    	String userId = "Admin";
        String password = "password";
        Mockito.when(service.saveUser(user)).thenReturn(true);
        Mockito.when(service.findbyUserIdAndPassword(userId, password)).thenReturn(user);
        mvc.perform(post("/api/userservice/login").contentType(MediaType.APPLICATION_JSON).content(jsonToString(user)))
                .andExpect(status().isOk());
    }    
	
	private static String jsonToString(final Object obj) throws JsonProcessingException {
		// TODO Auto-generated method stub
		String result;
		try {
			final ObjectMapper mapper = new ObjectMapper();
			final String jsonContent = mapper.writeValueAsString(obj);
			result = jsonContent;
		} catch (JsonProcessingException e) {
			// TODO: handle exception
			result = "Json Processing error";
		}
		return result;
	}
	

}
