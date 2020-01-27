import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  viewFavorite: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  emitViewFavorite() {
    console.log('setting it true');
    this.viewFavorite.emit(true);
  }

  getViewFavorite() {
    return this.viewFavorite;
  }
}
