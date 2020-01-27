import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../services/giphy.service';
import {Giphy} from '../interfaces/giphy';
import {GiphySearch} from '../interfaces/giphySearch.interface';
import {HeaderService} from '../header/header.service';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  listOfGiphs: Giphy[];

  constructor(private authService: AuthService,
              private giphyService: GiphyService,
              private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.getViewFavorite().subscribe(x => console.log(x));
  }

  onEnter(search: HTMLInputElement) {
    this.giphyService.search(search.value, 50, 0)
      .subscribe((res: GiphySearch) => {
        console.log(res.data);
        this.listOfGiphs = res.data;
      });
  }

  save(giphs: Giphy) {
    this.giphyService.save(giphs.id).subscribe(() => {});
  }

  viewFavorite() {
    this.giphyService.queryFavorites().subscribe( y => {
      this.listOfGiphs = y.data
    });
  }
}
