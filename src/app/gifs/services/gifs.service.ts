import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { environment } from '@environment/environment';
import { GiphyItem, GiphyResponse } from '../interfaces/giphy.interfaces';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const historyString = localStorage.getItem(GIF_KEY) ?? '{}';
  const history = JSON.parse(historyString);
  return history;
};

@Injectable({ providedIn: 'root' })
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<GiphyItem[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  searchHistory = signal<Record<string, GiphyItem[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  private saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });


  constructor() {
    console.log('servicio creado');
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 25,
          rating: 'g',
        },
      })
      .subscribe((response) => {
        this.trendingGifs.set(response.data);
        this.trendingGifsLoading.set(false);
      });
  }

  searchGifs(query: string) {
    const term = query.toLowerCase();
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: term,
          limit: 20,
          rating: 'g',
        },
      })
      .pipe(
        map((response) => response.data),
        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [term]: items,
          }));
        }),
      );
  }

  getHistoryGifs(query: string): GiphyItem[] {
    return this.searchHistory()[query] ?? [];
  }
}
