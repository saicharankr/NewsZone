import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http:HttpClient) { }

  url = environment.apiUrl;

  public async getNdtvNews(PageNo?){
    return this.http.get<any>(`${this.url}/ndtv?page=${PageNo}`).toPromise().catch(err => console.log(err))
  }

  public async getInNews(PageNo?) {
    return this.http.get<any>(`${this.url}/in?page=${PageNo}`).toPromise().catch(err => console.log(err))
  }
  
  public async getTinNews(PageNo?){
    return this.http.get<any>(`${this.url}/tin?page=${PageNo}`).toPromise().catch(err => console.log(err))
  }
}
