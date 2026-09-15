import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  private activatedRoute = inject(ActivatedRoute);
  private gifsService = inject(GifsService);

  public query = toSignal(
    this.activatedRoute.params.pipe(map((params) => params['query'] as string)),
  );

  public gifsByKey = computed(() => {
    return this.gifsService.getHistoryGifs(this.query() ?? '');
  });
}

