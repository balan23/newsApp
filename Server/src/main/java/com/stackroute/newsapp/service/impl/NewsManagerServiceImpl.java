package com.stackroute.newsapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.newsapp.entity.NewsEntity;
import com.stackroute.newsapp.exception.NewsNotFoundException;
import com.stackroute.newsapp.repository.NewsRepo;
import com.stackroute.newsapp.service.NewsManagerService;

/**
 * @author Manobalan A
 *Service Implementation for manage news in local repo by admin user
 */
@Service("newsManagerService")
public class NewsManagerServiceImpl implements NewsManagerService {
	
	@Autowired
	private NewsRepo newsRepo;

	@Override
	public boolean saveNews(NewsEntity news){
		newsRepo.save(news);
		return true;
	}

	@Override
	public NewsEntity updateNews(NewsEntity news) throws NewsNotFoundException {
		final NewsEntity object = newsRepo.findById(news.getNewsId()).orElse(null);
		if (object == null) {
			throw new NewsNotFoundException("Could not save news, News already exists");
		}
		newsRepo.save(news);
		return news;
	}
	

	@Override
	public boolean deleteNewsById(int newsId) throws NewsNotFoundException {
		final NewsEntity object = newsRepo.findById(newsId).orElse(null);
		if (object == null) {
			throw new NewsNotFoundException("News not found");
		}
		newsRepo.delete(object);
		return true;
	}

	@Override
	public List<NewsEntity> getAllNews() {
		return (List<NewsEntity>) newsRepo.findAll();
	}

	@Override
	public List<NewsEntity> searchByTitle(String searchText) {
		return (List<NewsEntity>) newsRepo.findBytitleContaining(searchText);
	}

}
