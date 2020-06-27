import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "9c9825bd8831d74a3e5183de141b8fa8";

// methods
const methodTagTopArtists = "tag.gettopartists";
const methodArtistInfo = "artist.getinfo";
const methodArtistTopAlbums = "artist.gettopalbums";

const findArtistGenre = (genre) => `&tag=${genre}`;
const mbid = (id) => `&mbid=${id}`;
const page = (pageNumber) => `&page=${pageNumber}`;
const limit = "&limit=20";
const baseUrl = (method, params) => `http://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json&method=${method}&lang=pt${params}`;

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(private http: HttpClient) { }

  // recupera os artistas por um nome de gênero
  getArtistsByGenre(genre: string, pageNum: number): Observable<any> {
    let params = findArtistGenre(genre) + limit + page(pageNum);
    let url = baseUrl(methodTagTopArtists, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera informações do artista
  getArtistInfo(id: string): Observable<any> {
    let params = mbid(id);
    let url = baseUrl(methodArtistInfo, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera os albuns de um artista
  getAlbumsByArtist(id: string): Observable<any> {
    let params = mbid(id);
    let url = baseUrl(methodArtistTopAlbums, params);
    console.log(url);
    return this.http.get(url);
  }
}
