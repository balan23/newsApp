package com.stackroute.newsapp;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.stackroute.newsapp.entity.User;
import com.stackroute.newsapp.exception.UserAlreadyExistsException;
import com.stackroute.newsapp.exception.UserNotFoundException;
import com.stackroute.newsapp.repository.UserRepository;
import com.stackroute.newsapp.service.UserService;
import com.stackroute.newsapp.service.UserServiceImpl;
/**
 * @author Manobalan A 
 * Test class for User Service
 */
public class UserServiceTest {

	
	@MockBean
	private transient UserService service;
	
	@Autowired
    private UserRepository userRepository;
	
	@Mock
	private transient User user;
	
    @InjectMocks
    private UserServiceImpl userSvcImpl;

	
	@Before
	public void setup() {
		user = new User();
		user.setFirtName("Mano");
		user.setLastName("balaa");
		user.setPassword("password");
		user.setUserid("mano2020");
		
	}

    @Test
    public void testSaveUserSuccess() throws UserAlreadyExistsException{
        Mockito.when(userRepository.save(user)).thenReturn(user);
        boolean ind = service.saveUser(user);
        assertEquals("Already Register User", true, ind);
    }
    
    @Test
    public void testFindByUserIdAndPassword() throws UserNotFoundException {
        Mockito.when(userRepository.findByUseridAndPassword("mano2020", "password")).thenReturn(user);
        User usr = service.findbyUserIdAndPassword("mano2020", "password");
        assertEquals("mano2020", usr.getUserid());
    }
}
