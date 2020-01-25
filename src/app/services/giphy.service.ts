import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  search(searchString: string) {
    let params: HttpParams = new HttpParams()
      .set('query', searchString)
      .set('limit', '50')
      .set('offset', '0');
    return this.http.get<any>('http://localhost:8080/giphy/search', {params});
  }
}
