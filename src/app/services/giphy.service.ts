import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
    const params: HttpParams = this.authorizedParams()
      .set('query', searchString)
      .set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.http.get<GiphySearch>(`${properties.serverUrl}/search`, {params});
  }

  save(giphId: string): Observable<Giphy> {
    const params: HttpParams = this.authorizedParams().set('giphyId', giphId);
    return  this.http.get<any>(`${properties.serverUrl}/save`, {params});
  }

  queryFavorites(): Observable<GiphySearch> {
    return this.http.get<GiphySearch>(`${properties.serverUrl}/getAll`,
      { params: this.authorizedParams() });
  }

  remove(giphId: string) {
    const params: HttpParams = this.authorizedParams().set('giphyId', giphId);
    return  this.http.get<any>(`${properties.serverUrl}/remove`, {params});
  }
}
