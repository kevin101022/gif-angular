import { Component, input } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { GiphyItem } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'gifs-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  public gifs = input.required<GiphyItem[]>();
}
