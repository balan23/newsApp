package com.stackroute.newsapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackroute.newsapp.entity.NewsEntity;

/**
 * @author Manobalan A
 * Handles data base integration for news repo
 * Admin can add/delete/update news to news repo
 */
public interface  NewsRepo  extends JpaRepository<NewsEntity, Integer>{
	
	/**
	 * To get news by title search
	 * @param title
	 * @return
	 */
	List<NewsEntity> findBytitleContaining(String title);

}
