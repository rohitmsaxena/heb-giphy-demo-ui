import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../services/giphy.service";
import * as firebase from "firebase";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  listOfGiphs: any[];

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    var x = firebase.auth();
    x.currentUser.getIdToken(false).then(r => console.log(r));
  }


  onEnter(search: HTMLInputElement) {
    console.log(search.value)
    this.giphyService.search(search.value).subscribe(res => {
      console.log(res.data)
      this.listOfGiphs = res.data.map(x => x.images.downsized_large.url);
      console.log(this.listOfGiphs)
    })
  }
}
