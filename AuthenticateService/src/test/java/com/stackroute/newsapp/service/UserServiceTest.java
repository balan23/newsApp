/**
 * 
 */
package com.stackroute.newsapp.service;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
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
	/**
	 * @throws java.lang.Exception
	 */
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
		user = new User();
		user.setFirtName("Mano");
		user.setLastName("balaa");
		user.setPassword("password");
		user.setUserid("mano2020");
		
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
	}

	/**
	 * Test method for {@link com.stackroute.newsapp.service.UserService#saveUser(com.stackroute.newsapp.entity.User)}.
	 */
    @Test
    public void testSaveUserSuccess() throws UserAlreadyExistsException{
        Mockito.when(userRepository.save(user)).thenReturn(user);
        boolean ind = service.saveUser(user);
        assertEquals("Already Register User", true, ind);
    }

	/**
	 * Test method for {@link com.stackroute.newsapp.service.UserService#findbyUserIdAndPassword(java.lang.String, java.lang.String)}.
	 */   
    @Test
    public void testFindByUserIdAndPassword() throws UserNotFoundException {
        Mockito.when(userRepository.findByUseridAndPassword("mano2020", "password")).thenReturn(user);
        User usr = service.findbyUserIdAndPassword("mano2020", "password");
        assertEquals("mano2020", usr.getUserid());
    }

}
