package com.stackroute.newsapp.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.newsapp.entity.NewsEntity;
import com.stackroute.newsapp.exception.NewsNotFoundException;
import com.stackroute.newsapp.service.NewsManagerService;
import com.stackroute.newsapp.util.UserUtil;

/**
 * @author Manobalan A
 * Controller used to expose services for new repo
 * Used by admin for add , update and delete news
 */
@RestController
@RequestMapping("api/v1/news")
@CrossOrigin(origins = "*")
public class NewsController {
	
	@Autowired
	private NewsManagerService newsManagerServiceImpl;
	
	@Autowired
	private UserUtil userUtil;
	
	@PostMapping
	public ResponseEntity<?>saveNews(@RequestBody NewsEntity news, HttpServletRequest request) {
		ResponseEntity<?> responseEntity = null;
		if(userUtil.isAdmin(request)){

			newsManagerServiceImpl.saveNews(news);
			responseEntity = new ResponseEntity<NewsEntity>(news, HttpStatus.CREATED);

		}else{
			responseEntity = new ResponseEntity<String>("Logged in user doesnt have previlage to access",
					HttpStatus.UNAUTHORIZED);
		}
		return responseEntity;
	}
	
	
	/**
	 * API to update news 
	 * @param id
	 * @param news
	 * @return responseEntity
	 */
	@PutMapping(path = "update/{newsId}")
	public ResponseEntity<?> updateNews(@PathVariable("newsId") Integer id, @RequestBody NewsEntity news, HttpServletRequest request) {
		ResponseEntity<?> responseEntity = null;
		if(userUtil.isAdmin(request)){
		try {
			NewsEntity updatedNews = newsManagerServiceImpl.updateNews(news);
			responseEntity = new ResponseEntity<NewsEntity>(updatedNews, HttpStatus.OK);
		} catch (NewsNotFoundException exception) {
			responseEntity = new ResponseEntity<String>("{ message :" + exception.getMessage() + "}",
					HttpStatus.NOT_FOUND);
		}
		}else{
			responseEntity = new ResponseEntity<String>("Logged in user doesnt have previlage to access",
					HttpStatus.UNAUTHORIZED);
		}
		return responseEntity;
	}

	/**
	 * API to delete news by  id
	 * @param id
	 * @return responseEntity
	 */
	@DeleteMapping(path = "delete/{newsId}")
	public ResponseEntity<?> deleteNews(@PathVariable("newsId") int id, HttpServletRequest request) {
		ResponseEntity<?> responseEntity = null;
		if(userUtil.isAdmin(request)){
			
		try {
			boolean deleteStatus = newsManagerServiceImpl.deleteNewsById(id);
			responseEntity = new ResponseEntity<Boolean>(deleteStatus, HttpStatus.OK);
		} catch (NewsNotFoundException exception) {
			responseEntity = new ResponseEntity<String>("{ message :" + exception.getMessage() + "}",
					HttpStatus.NOT_FOUND);
		}
	}else{
			responseEntity = new ResponseEntity<String>("Logged in user doesnt have previlage to access",
					HttpStatus.UNAUTHORIZED);
		}
		return responseEntity;
	}
	
	/**
	 * API to get all news
	 * @return responseEntity
	 */
	@GetMapping
	public ResponseEntity<?> getAllNews() {
	
		ResponseEntity<?> responseEntity = null;
		
		List<NewsEntity> news = newsManagerServiceImpl.getAllNews();
		responseEntity = new ResponseEntity<List<NewsEntity>>(news, HttpStatus.OK);
	
		return responseEntity;
	}
	

	@GetMapping(path="/search/{searchText}")
	public ResponseEntity<?> searchNews(@PathVariable("searchText")String searchText) {
		ResponseEntity<?> responseEntity = null;
	
		List<NewsEntity> news = newsManagerServiceImpl.searchByTitle(searchText);
		responseEntity = new ResponseEntity<List<NewsEntity>>(news, HttpStatus.OK);
	
		return responseEntity;
	}
	
}
