package com.stackroute.newsapp;

import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author Manobalan A
 *
 */
@SpringBootApplication
public class NewsAppApplication {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(NewsAppApplication.class, args);
	}

}
