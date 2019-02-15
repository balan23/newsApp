package com.stackroute.newsapp;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.newsapp.entity.NewsEntity;
import com.stackroute.newsapp.repository.NewsRepo;

/**
 * @author Manobalan A
 *Test class for repo level apis
 */
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
public class NewsRepoTest {

	@Autowired
	private NewsRepo newsRepo;
	
	
	@Test
	public void saveNewsTest() throws Exception {

		NewsEntity news = new NewsEntity();
		news.setAuthor("author");
		news.setDescription("description");
		news.setTitle("title");
		news.setId("id");
		newsRepo.save( news);
		final List<NewsEntity> retrivedNews = newsRepo.findBytitleContaining("title");
	    assertThat(retrivedNews.get(0).getId()).isEqualTo("id");
	}
	
	@Test
	public void deleteNewsTest() throws Exception{
		NewsEntity news = new NewsEntity();
		news.setAuthor("author2");
		news.setDescription("description2");
		news.setTitle("title2");
		news.setId("id2");
		newsRepo.save( news);
		 List<NewsEntity> retrivedNews = newsRepo.findBytitleContaining("title2");
		newsRepo.delete(news);
		retrivedNews = newsRepo.findBytitleContaining("title2");
		assertEquals(0,retrivedNews.size());
	}

	@Test
	public void getAllNewsTest() throws Exception{
		NewsEntity news = new NewsEntity();
		news.setAuthor("authorA");
		news.setDescription("description-A");
		news.setTitle("title-A");
		news.setId("id-A");
		newsRepo.save( news);
		
		NewsEntity news2 = new NewsEntity();
		news2.setAuthor("authorB");
		news2.setDescription("description-B");
		news2.setTitle("title-B");
		news2.setId("idB");
		newsRepo.save( news2);
		List<NewsEntity> newsList=(List<NewsEntity>)newsRepo.findAll();
		assertEquals(true,newsList.size()>=2);
		
	}
	@Test
	public void getAllNewsSearchTest() throws Exception{
		NewsEntity news = new NewsEntity();
		news.setAuthor("authorC");
		news.setDescription("description-C");
		news.setTitle("title-C");
		news.setId("id-C");
		newsRepo.save( news);	
		 List<NewsEntity> retrivedNews = newsRepo.findBytitleContaining("title-C");
		 assertEquals(true,retrivedNews.size()==1);
		 
	}

	public NewsRepo getNewsRepo() {
		return newsRepo;
	}


	public void setNewsRepo(NewsRepo newsRepo) {
		this.newsRepo = newsRepo;
	}

	
}
