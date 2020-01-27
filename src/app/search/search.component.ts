import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../services/giphy.service";
import * as firebase from "firebase";
import {Giphy} from '../interfaces/giphy';
import {GiphySearch} from '../interfaces/giphySearch.interface';

@Component({
  selector: 'app-hello-world',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  listOfGiphs: Giphy[];

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    firebase.auth().currentUser.getIdToken(false).then(r => console.log(r));
  }

  onEnter(search: HTMLInputElement) {
    this.giphyService.search(search.value, 50, 0)
      .subscribe((res: GiphySearch) => {
        console.log(res.data);
        this.listOfGiphs = res.data;
      });
  }

  save(giphs: Giphy) {
    console.log(giphs.id);
    this.giphyService.save(giphs.id).subscribe(x => {
      console.log(x);
      this.giphyService.queryFavorites().subscribe( y => {
        console.log(y);
      });
    });

  }
}
