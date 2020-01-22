import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass'],
})
export class FavoriteComponent {
  @Input('isFavorite') _is_favorite: boolean;
  @Output('change') onChange = new EventEmitter();

  constructor() { }

  get is_favorite() : boolean { 
    return this._is_favorite;
  }

  onClick() {
    this.onChange.emit({newState: this._is_favorite});
  }

}
