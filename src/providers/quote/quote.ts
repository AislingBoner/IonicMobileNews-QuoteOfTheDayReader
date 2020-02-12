import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class QuoteProvider {

constructor(public http: HttpClient) {
  console.log('In the Quote Provider');
}

getQuote(): Observable<any> {
return this.http.get("http://quotes.rest/qod.json");

}


}
