package com.stackroute.newsapp.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author Manobalan A
 * Enity for watch list news
 */
@Entity
@Table(name = "watchlist")
@NamedQueries({
@NamedQuery(name = "WatchListEntity.fetchByIdAndUserId",
query = "SELECT w FROM WatchListEntity w WHERE w.news.newsId =:id and w.userId=:userId"
),
@NamedQuery(name = "WatchListEntity.fetchAllWatchListEntity",
query = "SELECT w.news FROM WatchListEntity w WHERE w.userId=:userId"
),
@NamedQuery(name = "WatchListEntity.searchNews",
query = "SELECT w.news FROM WatchListEntity w WHERE w.userId=:userId and uppercase(w.news.title) like :searchparam"
)
})

public class WatchListEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="watch_list_id")
	private int watchListId;
	@ManyToOne(cascade = CascadeType.MERGE)
	private NewsEntity news;
	public WatchListEntity() {
		super();
	}
	@Column(name="user_id")
	private String  userId;
	
	
	
	public int getWatchListId() {
		return watchListId;
	}
	public void setWatchListId(int watchListId) {
		this.watchListId = watchListId;
	}
	public NewsEntity getNews() {
		return news;
	}
	public WatchListEntity(NewsEntity news, String userId) {
		super();
		this.news = news;
		this.userId = userId;
	}
	public void setNews(NewsEntity news) {
		this.news = news;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}

}
