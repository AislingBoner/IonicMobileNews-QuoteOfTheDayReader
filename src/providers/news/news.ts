import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class NewsProvider {


  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }


  
getNewsIreland() : Observable <any>{
return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&apiKey=e37c6218f9a54253b3a2ad77b78e6f9e");
}

getNewsCanada() : Observable <any>{
return this.http.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=e37c6218f9a54253b3a2ad77b78e6f9e");
}

getNewsUSA() : Observable <any>{
return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e37c6218f9a54253b3a2ad77b78e6f9e");
}

	

}

