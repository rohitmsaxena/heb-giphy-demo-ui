import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from '../core/auth.service';
import {properties} from '../../../properties';
import {Giphy} from '../interfaces/giphy';
import {Observable} from 'rxjs';
import {GiphySearch} from '../interfaces/giphySearch.interface';



@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient, public auth: AuthService) { }

  private authorizedParams(): HttpParams {
    return new HttpParams().set('idToken', this.auth.idToken);
  }

  search(searchString: string, limit: number, offset: number): Observable<GiphySearch> {
    console.log(this.auth.idToken);
    const params: HttpParams = this.authorizedParams()
      .set('query', searchString)
      .set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.http.get<GiphySearch>(`${properties.serverUrl}/search`, {params});
  }

  save(giphs: any): Observable<Giphy> {
    const params: HttpParams = this.authorizedParams().set('giphyId', giphs);
    console.log(params);
    console.log(`${properties.serverUrl}/save`);
    return  this.http.get<any>(`${properties.serverUrl}/save`, {params});
  }

  queryFavorites(): Observable<Giphy[]> {
    return this.http.get<Giphy[]>(`${properties.serverUrl}/getAll`,
      { params: this.authorizedParams() });
  }
}
