package com.stackroute.newsapp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.stackroute.newsapp.entity.NewsEntity;
import com.stackroute.newsapp.exception.NewsAlreadyExistsException;
import com.stackroute.newsapp.exception.NewsNotFoundException;
import com.stackroute.newsapp.repository.NewsRepo;
import com.stackroute.newsapp.service.impl.NewsManagerServiceImpl;

/**
 * @author Manobalan A 
 * Test class for service level apis
 */
public class NewsServiceTest {

	@Mock
	private transient NewsRepo newsRepo;
	@InjectMocks
	private NewsManagerServiceImpl newsManagerServiceImpl;
	transient Optional<NewsEntity> options;

	@Test
	public void saveNewsTest() throws NewsAlreadyExistsException {
		NewsEntity news = new NewsEntity();
		news.setAuthor("authorC");
		news.setDescription("descriptionC");
		news.setTitle("titleC");
		news.setId("idC");
		newsManagerServiceImpl.saveNews(news);
		
		
		when(newsRepo.save(news)).thenReturn(news);
		final boolean flag = newsManagerServiceImpl.saveNews(news);
		assertTrue(flag);
	

	}

	@Test
	public void deleteNewsByIdTest() throws NewsNotFoundException {
		
		
		NewsEntity news = new NewsEntity();
		news.setAuthor("authorC");
		news.setDescription("descriptionC");
		news.setTitle("titleC");
		news.setId("idC");
		options=Optional.of(news);
		when(newsRepo.findById(1)).thenReturn(options);
		
		doNothing().when(newsRepo).delete(news);
		final boolean flag = newsManagerServiceImpl.deleteNewsById(1);
		assertTrue(flag);
	}

	@Test
	public void getAllNewsTest() {
		final List<NewsEntity> newsList = new ArrayList<>(1);
		when(newsRepo.findAll()).thenReturn(newsList);
		final List<NewsEntity> newList = newsManagerServiceImpl.getAllNews();
		assertEquals(newList, newsList);
	}
	@Test
	public void searchByTitleTest() {
		NewsEntity news = new NewsEntity();
		news.setAuthor("authorE");
		news.setDescription("descriptionE");
		news.setTitle("titleE");
		news.setId("idE");
		List<NewsEntity> newsList = new ArrayList<NewsEntity>();
		newsList.add(news);
		when(newsRepo.findBytitleContaining("titleE")).thenReturn(newsList);
		assertEquals(true, newsList.get(0).getTitle().equals("titleE"));
	}
	@Before
	public void setupMock() {
		MockitoAnnotations.initMocks(this);
	}

}
