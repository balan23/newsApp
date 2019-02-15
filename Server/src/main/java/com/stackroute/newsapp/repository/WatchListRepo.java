package com.stackroute.newsapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.stackroute.newsapp.entity.NewsEntity;
import com.stackroute.newsapp.entity.WatchListEntity;

/**
 * @author Manobalan A
 *	WatchListRepo - User can list,add,delete from watch list using this repo
 */
public interface WatchListRepo  extends JpaRepository<WatchListEntity, Integer>{
	
	/**
	 * API to find news by user id
	 * @param news
	 * @param userId
	 * @return
	 */
	WatchListEntity findByNewsAndUserId(NewsEntity news,String userId);
	/**
	 * API to fetch by news by id and user id
	 * @param id
	 * @param userId
	 * @return
	 */
	List<WatchListEntity> fetchByIdAndUserId (@Param("id") int id,@Param("userId") String userId);
	/**
	 * API to get all watchlist news of a user
	 * @param userId
	 * @return
	 */
	List<NewsEntity> getAllWatchListNews (@Param("userId") String userId);
	
	
	/**
	 * API to search news
	 * @param userId
	 * @param searchparam
	 * @return
	 */
	List<NewsEntity> searchNews (@Param("userId") String userId, @Param("searchparam") String searchparam);
}
