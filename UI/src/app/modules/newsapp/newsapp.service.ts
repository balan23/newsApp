import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {News} from './news';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsappService {

  newsApiEndpoint :string;
  apiKey : string;
  newsLocalRepoUrl :string;
  watchListUrl:string;
  deleteFromLocalRepoUrl:string;

  constructor(private http:HttpClient) { 
    this.apiKey="b23da559e02742b593c9c7591281c685";
    this.newsApiEndpoint="https://newsapi.org/v2/top-headlines";
    this.newsLocalRepoUrl="http://localhost:8081/api/v1/news";
    this.deleteFromLocalRepoUrl="http://localhost:8081/api/v1/news/delete";
    this.watchListUrl="http://localhost:8081/api/v1/watchlist";
  }

  getNews():Observable<Array<News>>{
     const url=`${this.newsApiEndpoint}?country=in&apikey=${this.apiKey}&page=1`;
    return this.http.get<Array<News>>(url).pipe(
      map(this.pickMovieResults)
  
  );
  }

  //get from local app news
  getLocalRepoNews():Observable<Array<News>>{
    return this.http.get<Array<News>>(this.newsLocalRepoUrl);
  }

  //get from watchlist
  getMyNews():Observable<Array<News>>{
    return this.http.get<Array<News>>(this.watchListUrl);
  }
  
  
  // add movies to local app repo by admin
  addNews(news){
   return this.http.post(this.newsLocalRepoUrl,news);
  }
  addToWatchList(news){
    return this.http.post(this.watchListUrl,news);
  }
  
  pickMovieResults(response) {
    return response['articles'];
  }

  deleteFromLocalRepo(news){
  const url =`${this.deleteFromLocalRepoUrl}/${news.newsId}`;
  return this.http.delete(url,{responseType:'text'});
  }


  deleteFromWatchList(news){
  const url =`${this.watchListUrl}/${news.newsId}`;
  return this.http.delete(url,{responseType:'text'});
  }

  searchNewsFromLocalRepo(searchKey: string, page: number = 1): Observable<Array<News>> {
    if (searchKey.length > 0) {
    const url=`${this.newsLocalRepoUrl}/search/${searchKey}`;
    return this.http.get<Array<News>>(url);
    }
    return null;
  }

  updateNewsDescription(news){
    const url =`${this.newsLocalRepoUrl}/update/${news.newsId}`;
    console.log(news.title,'update to news');
    return this.http.put(url, news);
  
  }
}
