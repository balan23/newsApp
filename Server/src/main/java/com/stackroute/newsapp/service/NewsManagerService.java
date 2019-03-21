package com.stackroute.newsapp.service;

import java.util.List;

import com.stackroute.newsapp.entity.NewsEntity;

import com.stackroute.newsapp.exception.NewsNotFoundException;

/**
 * @author Manobalan A
 * Service API for manage news in local repo by admin user
 */
public interface NewsManagerService {
	
	/**
	 * @param news
	 * @return true for successful save , else false
	 * @throws NewsAlreadyExistsException
	 */
	public boolean saveNews(NewsEntity news);
	/**
	 * @param news
	 * @return News for successful update, NewsNotFoundException for news doesnt exits 
	 * @throws NewsNotFoundException
	 */
	public NewsEntity updateNews(NewsEntity news) throws NewsNotFoundException;
	/**
	 * @param newsId
	 * @return true for successful delete else false
	 * @throws NewsNotFoundException
	 */
	public boolean deleteNewsById(int newsId) throws NewsNotFoundException;
	
	/**
	 * Get all news from news repo
	 * @return List<News>
	 */
	public List<NewsEntity> getAllNews();
	
	/**
	 * API to get news by title
	 * @param searchText
	 * @return
	 */
	public List<NewsEntity> searchByTitle(String searchText);

}
