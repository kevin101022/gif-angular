import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { GiphyItem } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  private gifsService = inject(GifsService);

  public gifs = signal<GiphyItem[]>([]);

  onSearch(query: string) {
    this.gifsService.searchGifs(query).subscribe((items) => {
      this.gifs.set(items);
    });
  }
}


