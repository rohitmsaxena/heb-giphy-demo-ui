import {Component, ViewChild} from '@angular/core';
import {GiphyService} from '../services/giphy.service';
import {Giphy} from '../interfaces/giphy';
import {GiphySearch} from '../interfaces/giphySearch.interface';
import {AuthService} from '../core/auth.service';

enum SearchState {
  normal,
  favorite
}

@Component({
  selector: 'app-hello-world',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent  {
  listOfGiphs: Giphy[];
  searchResultsType: SearchState;
  offset: number;
  searchText: string = '';

  constructor(private authService: AuthService,
              private giphyService: GiphyService) {
    this.offset = 0;
  }

  onEnter(search: HTMLInputElement): void {
    this.offset = 0;
    this.searchText = search.value;
    this.searchResultsType = SearchState.normal;
    this.giphyService.search(search.value, 50, this.offset)
      .subscribe((res: GiphySearch) => {
        this.listOfGiphs = res.data;
      });
    this.offset += 50;
  }

  searchMore() {
    this.giphyService.search(this.searchText, 25, this.offset)
      .subscribe((res: GiphySearch) => {
        console.log(res.data);
        console.log(this.listOfGiphs.length);
        this.listOfGiphs = this.listOfGiphs.concat(res.data);
        console.log(this.listOfGiphs.length);
      });
    this.offset += 25;
  }

  save(giph: Giphy): void {
    this.giphyService.save(giph.id).subscribe(() => {});
  }

  remove(i: number, giph: Giphy): void {
    this.listOfGiphs.splice(i, 1);
    this.giphyService.remove(giph.id).subscribe(() => {});
  }

  ifNormalSearch(): boolean {
    if (this.searchResultsType === SearchState.normal){
      return true;
    }
    return false;
  }

  viewFavorite(): void {
    this.giphyService.queryFavorites().subscribe( y => {
      this.searchResultsType = SearchState.favorite;
      this.listOfGiphs = y.data;
    });
  }
}
