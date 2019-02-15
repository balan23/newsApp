package com.stackroute.newsapp.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.newsapp.entity.NewsEntity;
import com.stackroute.newsapp.entity.WatchListEntity;
import com.stackroute.newsapp.exception.NewsAlreadyExistsException;
import com.stackroute.newsapp.exception.NewsNotFoundException;
import com.stackroute.newsapp.repository.WatchListRepo;
import com.stackroute.newsapp.service.WatchListManagerService;

/**
 * @author Manobalan A
 *Service Implementation for manage news in watch list by  user
 */
@Service("watchListManagerService")
public class WatchListManagerServiceImpl implements WatchListManagerService {
	final String testUserId = "testid";

	@Autowired
	private WatchListRepo watchListRepo;
	@Override
	public boolean saveNews(NewsEntity news) throws NewsAlreadyExistsException {
		System.out.println(news.getId());
		System.out.println(news.getAuthor());
		System.out.println(news.getDescription());
		System.out.println(news.getPublishedAt());
		System.out.println(news.getUrlToImage());
		//String userId= testUserId;
		if (news.getId() != null) {
			final List<WatchListEntity> object = watchListRepo.fetchByIdAndUserId(Integer.parseInt(news.getId()),news.getUserId());	
			if (object.size()>0) {
				throw new NewsAlreadyExistsException("Could not save news, News already exists");
			}
		}
		//watchListRepo.save(new WatchListItem(news,news.getUserId()));
		System.out.println("before");
		WatchListEntity wlt = new WatchListEntity(news,news.getUserId());
		watchListRepo.save(wlt);
		watchListRepo.flush();
		System.out.println("after");
		return true;
	}

	@Override
	public boolean deleteNewsById(int newsId,String userId) throws NewsNotFoundException {
		final List<WatchListEntity> object = watchListRepo.fetchByIdAndUserId(newsId,userId);
		if (object == null) {
			throw new NewsNotFoundException("News not found");
		}
		for(WatchListEntity wLE :object){
		watchListRepo.delete(wLE);
		}
		return true;
	}

	@Override
	public List<NewsEntity> getAllNews(String userId) {
		return  (List<NewsEntity>) watchListRepo.getAllWatchListNews(userId);
	}

	@Override
	public List<NewsEntity> searchByTitle(String userId, String searchText) {
		return  (List<NewsEntity>) watchListRepo.searchNews(userId,searchText);
	}

}
