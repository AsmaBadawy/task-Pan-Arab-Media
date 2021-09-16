import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  getarticle()
  {
    return this.http.get(
      `${environment.apiUrl}top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4`
    );
  }
}
