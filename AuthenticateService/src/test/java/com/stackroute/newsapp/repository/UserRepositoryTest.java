/**
 * 
 */
package com.stackroute.newsapp.repository;

import static org.junit.Assert.*;

import javax.transaction.Transactional;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.newsapp.entity.User;
import com.stackroute.newsapp.repository.UserRepository;
import com.stackroute.newsapp.service.UserService;

/**
 * @author Manobalan A 
 * Test class for User Auth Repo
 */
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
public class UserRepositoryTest {

	@MockBean
	private transient UserService service;
	
	@Autowired
    private UserRepository userRepository;
	
	@Mock
	private transient User user;

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
		user.setFirtName("Fname");
		user.setLastName("Lname");
		user.setPassword("password");
		user.setUserid("Admin");
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
	}

    @Test
    public void testRegisterUser() {
    	userRepository.save(user);
        User object = userRepository.findById(user.getUserid()).get();
       assertEquals(user.getUserid(), object.getUserid());
    
    }

    @Test
    public void testLoginUser() {
    	userRepository.save(user);
        User object = userRepository.findById(user.getUserid()).get();
        assertEquals(user.getUserid(), object.getUserid());
    }

}
